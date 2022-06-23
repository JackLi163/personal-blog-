module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "https://study.duyiedu.com",
      },
    },
  },
};
