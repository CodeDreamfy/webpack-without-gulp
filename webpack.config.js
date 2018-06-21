module.exports = function(env, argv) {
  return argv.mode === "production"
    ? require("./config/webpack.prod")
    : require("./config/webpack.dev");
};
