const { smart } = require("webpack-merge");
const webpack = require("webpack");
const base = require("./webpack.base");
const path = require("path");
const resolve = path.resolve;

module.exports = function(env) {
  const output = {
    path: resolve(__dirname, "../dist"),
    filename: "js/[name].[hash:7].js"
  };
  const rules = [
    {
      test: /\.html$/,
      include: [resolve(__dirname, "../src")],
      use: [
        {
          loader: "html-loader",
          options: {
            attrs: ["img:src", "video:src"]
          }
        }
      ]
    },
    {
      test: /\.css$/,
      include: [resolve(__dirname, "../src/css")],
      use: ["style-loader", "css-loader", "postcss-loader"]
    },
    {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: "url-loader",
      options: {
        limit: 5000,
        name: "[name].[hash:7].[ext]"
      }
    },
    {
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
      loader: "url-loader",
      options: {
        limit: 10000,
        name: "[name].[hash:7].[ext]"
      }
    }
  ];
  const devServer = {
    hot: true
  };
  const plugins = [
    new webpack.NamedModulesPlugin(), // 用于启动 HMR 时可以显示模块的相对路径
    new webpack.HotModuleReplacementPlugin() // Hot Module Replacement插件
  ];
  const config = smart(base, {
    output,
    module: { rules },
    devServer
  });
  config.plugins.push(...plugins);
  return config;
};