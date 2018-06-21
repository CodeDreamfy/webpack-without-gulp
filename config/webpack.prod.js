const { smart } = require("webpack-merge");
const base = require("./webpack.base");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const resolve = path.resolve;

const rules = [
  {
    test: /\.css$/,
    // include: [resolve(__dirname, "../src/css")],
    use: ExtractTextPlugin.extract({
      fallback: "style-loader",
      use: ["css-loader", "postcss-loader"]
      // publicPath: "../"
    })
  },
  {
    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
    include: [resolve(__dirname, "../src/assets")],
    use: [
      {
        loader: "url-loader",
        options: {
          limit: 8192,
          name: resolve(__dirname, "assets/[name].[hash:7].[ext]")
        }
      },
      {
        loader: "image-webpack-loader",
        options: {
          mozjpeg: {
            progressive: true,
            quality: 65
          },
          optipng: { enabled: false },
          pngquant: {
            quality: "65-90",
            speed: 4
          },
          gifsicle: {
            interlaced: false
          },
          webp: {
            quality: 75
          }
        }
      }
    ]
  }
];
const plugins = [
  new CleanWebpackPlugin(["../dist"]),
  new HtmlWebpackPlugin({
    template: resolve(__dirname, "../src/index.html")
    // filename: "index.html",
  }),
  new ExtractTextPlugin({
    filename: "[name].[hash:7].css"
  })
];
const config = smart(base, {
  module: { rules },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "initial",
          test: "vendor",
          name: "vendor", // 使用 vendor 入口作为公共部分
          enforce: true
        }
      }
    }
  }
});
config.plugins.concat(plugins);

// module.exports = config;

module.exports = smart(base, {
  module: {
    rules: [
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, "../src/css")],
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "postcss-loader"],
          publicPath: "../"
        })
      },
      {
        test: /\.(png|jpe?g|gif)/,
        include: [path.resolve(__dirname, "../src/img")],
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              name: "images/[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      // filename: "index.html",
      template: path.resolve(__dirname, "../src/index.html")
    }),
    new ExtractTextPlugin({
      filename: "./css/[name].[hash].css"
    })
  ]
});
