module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://47.96.229.53:7001",
      },
      "/static": {
        target: "http://47.96.229.53:7001",
      },
    },
  },
  configureWebpack: require("./webpack.config"),
};
