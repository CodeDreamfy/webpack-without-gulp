const { smart } = require("webpack-merge");
const webpack = require("webpack");
const base = require("./webpack.base");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const resolve = path.resolve;

const rules = [
  {
    test: /\.css$/,
    include: [resolve(__dirname, "../src/css")],
    use: ["style-loader", "css-loader", "postcss-loader"]
  }
];
const devServer = {
  hot: true
};
const plugins = [
  new webpack.NamedModulesPlugin(), // 用于启动 HMR 时可以显示模块的相对路径
  new webpack.HotModuleReplacementPlugin(), // Hot Module Replacement插件
  new HtmlWebpackPlugin({
    filename: "index.html",
    template: resolve(__dirname, "../src/index.html")
  })
];
const config = smart(base, {
  module: { rules },
  devServer,
  plugins
});
// config.plugins.concat(plugins);

module.exports = config;
