import getBanner from "@/api/banner";
export default {
  namespaced: true,
  state: {
    data: [],
    isloading: false,
  },
  mutations: {
    setLoading(state, payload) {
      state.isloading = payload;
    },
    setData(state, payload) {
      state.data = payload;
    },
  },
  actions: {
    async fetchBanner(ctx) {
      if (ctx.state.data.length > 0) {
        return;
      }
      ctx.commit("setLoading", true);
      ctx.commit("setData", await getBanner());
      ctx.commit("setLoading", false);
    },
  },
};
