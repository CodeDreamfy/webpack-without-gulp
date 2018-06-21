const { smart } = require("webpack-merge");
const webpack = require("webpack");
const base = require("./webpack.base");
const path = require("path");
const DashboardPlugin = require("webpack-dashboard/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const resolve = path.resolve;

const rules = [
  {
    test: /\.css$/,
    use: ["style-loader", "css-loader", "postcss-loader"]
  },
  {
    test: /\.(png|jpg|gif)$/,
    use: [
      {
        loader: "file-loader"
      }
    ]
  }
];
const devServer = {
  hot: true
};
const plugins = [
  new webpack.NamedModulesPlugin(), // 用于启动 HMR 时可以显示模块的相对路径
  new webpack.HotModuleReplacementPlugin(), // Hot Module Replacement插件
  // new DashboardPlugin()
  new HtmlWebpackPlugin({
    template: resolve(__dirname, "../index.html"),
    filename: "index.html",
    inject: true
  })
];
const config = smart(base, {
  module: { rules },
  devServer
});
config.plugins.concat(plugins);

module.exports = config;
