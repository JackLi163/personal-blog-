import getAbout from "@/api/about";
export default {
  namespaced: true,
  state: {
    data: null,
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
    async fetchAbout(ctx) {
      if (ctx.state.data) {
        return;
      }
      ctx.commit("setLoading", true);
      ctx.commit("setData", await getAbout());
      ctx.commit("setLoading", false);
    },
  },
};
