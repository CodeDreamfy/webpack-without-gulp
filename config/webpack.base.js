const path = require("path");
const webpack = require("webpack");
const resolve = path.resolve;

const entry = {
  app: "./src/main.js",
  vendors: ["jquery", "swiper"]
};
const output = {
  filename: "js/[name].[hash:7].js",
  path: resolve(__dirname, "../dist")
};
const resolver = {
  modules: [
    resolve(__dirname, "../node_modukes"), // 优先查找，提升速度
    "node_modules"
  ],
  alias: {
    "@": resolve("src")
  }
};
const rules = [
  {
    test: /\.js$/,
    include: [resolve(__dirname, "../src")],
    exclude: /node_modules/,
    use: [
      {
        loader: "babel-loader",
        options: { cacheDirectory: true }
      }
    ]
  },
  {
    test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
    loader: "url-loader",
    options: {
      limit: 10000,
      name: resolve(__dirname, "media/[name].[hash:7].[ext]")
    }
  }
];
const plugins = [
  new webpack.DefinePlugin({
    // webpack 内置的插件
    // 用于创建一些在编译时可以配置的全局常量,常量的值我们可以在 webpack 的配置
    // "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
  }),
  new webpack.ProvidePlugin({
    // webpack 内置的插件
    // 自动加载模块，而不必到处 import 或 require
    $: "jquery",
    jQuery: "jquery"
  })
];

module.exports = {
  entry,
  output,
  resolve: resolver,
  module: { rules },
  plugins
};
