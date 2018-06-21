const { smart } = require("webpack-merge");
const webpack = require("webpack");
const base = require("./webpack.base");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const resolve = path.resolve;

const output = {
  path: resolve(__dirname, "../dist"),
  filename: "[name].js",
  publicPath: env === "production" ? "/src/public" : "./"
};
const rules = [
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
    test: /\.[png|jpe?g|gif|avi|mp4]/,
    include: [path.resolve(__dirname, "../src/assets")],
    use: [
      {
        loader: "url-loader",
        options: {
          limit: 8192,
          name: "assets/[name].[ext]"
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
  new ExtractTextPlugin({
    filename: "./css/[name].[hash].css"
  }),
  new HtmlWebpackPlugin({
    template: resolve(__dirname, "../index.html"),
    filename: "index.html",
    inject: true
  })
];

const config = smart(base, {
  output,
  module: { rules }
});
config.plugins.concat(plugins);

module.exports = env => config;
