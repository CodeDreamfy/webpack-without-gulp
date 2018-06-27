const { smart } = require("webpack-merge");
const base = require("./webpack.base");
const path = require("path");
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const resolve = path.resolve;
const signale = require("signale");

module.exports = function (env) {
  const assetsPath = env == "productionRelease" ? "/scy/h5/hewu-h5/dist/" : "./";
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
        use: ["css-loader", "postcss-loader"],
        publicPath: env == "productionRelease" ? "/scy/h5/hewu-h5/dist/" : "/"
      })
      // use: ["style-loader", "css-loader", "postcss-loader"]
    },
    {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      include: [resolve(__dirname, "../src/assets")],
      use: [
        {
          loader: "url-loader",
          options: {
            limit: 8192,
            name: "assets/[name].[hash:7].[ext]",
            publicPath: env == "productionRelease" ? "/scy/h5/hewu-h5/dist/" : "/"
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
    new CleanWebpackPlugin(["dist"], { root: path.resolve(__dirname, "../") }),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify("production")
    }),
    new ExtractTextPlugin({
      filename: "css/[name].[hash:7].css"
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
