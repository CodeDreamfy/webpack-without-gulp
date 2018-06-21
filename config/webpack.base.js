const path = require("path");
const webpack = require("webpack");
const resolve = path.resolve;

const entry = {
  main: "./src/main.js",
  vendors: ["jquery", "swiper"]
};
const output = {
  path: resolve(__dirname, "dist"),
  filename: "js/[name].js"
  // publicPath: "./"
  // publicPath: process.env.NODE_ENV === "production" ? "/src/public" : "./"
};
const resolver = {
  modules: [
    resolve(__dirname, "../node_modules"), // 优先查找，提升速度
    "node_modules"
  ],
  extensions: [".js", ".css"],
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
    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
    loader: "url-loader",
    options: {
      limit: 5000,
      name: resolve(__dirname, "assets/[name].[hash:7].[ext]")
    }
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
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
  }),
  new webpack.ProvidePlugin({
    $: "jquery",
    Swiper: "swiper"
  })
];

module.exports = {
  entry,
  output,
  resolve: resolver,
  module: { rules },
  plugins
};
