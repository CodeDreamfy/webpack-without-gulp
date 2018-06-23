const { smart } = require("webpack-merge");
const base = require("./webpack.base");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const resolve = path.resolve;
const signale = require("signale");

module.exports = function(env) {
  const assetsPath = env == "productionRelease" ? "/src/h5/xxx/dist" : "./";
  signale.success(env, "productionRelease", assetsPath);
  const output = {
    path: resolve(__dirname, "../dist"),
    filename: "js/[name].[hash:7].js",
    publicPath: assetsPath
  };
  const rules = [
    {
      test: /\.html$/,
      include: [resolve(__dirname, "../src")],
      use: [
        {
          loader: "html-loader",
          options: {
            attrs: ["img:src", "video:src"],
            root: path.resolve(__dirname, assetsPath + "/assets")
          }
        }
      ]
    },
    {
      test: /\.css$/,
      include: [resolve(__dirname, "../src/css")],
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: ["css-loader", "postcss-loader"]
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
            name: "/assets/[name].[hash:7].[ext]"
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
    },
    {
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
      loader: "url-loader",
      options: {
        limit: 10000,
        name: "/media/[name].[hash:7].[ext]"
      }
    }
  ];
  const plugins = [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify("production")
    }),
    new CleanWebpackPlugin(["dist"], { root: path.resolve(__dirname, "../") }),
    new ExtractTextPlugin({
      filename: "css/[name].[hash:7].css",
      publicPath: assetsPath
    })
  ];
  return smart(base, {
    output,
    module: { rules },
    plugins,
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendors: {
            chunks: "initial",
            test: resolve(__dirname, "../node_modules"), // 路径在 node_modules 目录下的都作为公共部分
            name: "vendor", // 使用 vendor 入口作为公共部分
            enforce: true
          }
        }
      }
    }
  });
};
