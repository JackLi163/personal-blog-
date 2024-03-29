import getProject from "@/api/project";

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
    async fetchProject(ctx) {
      if (ctx.state.data.length) {
        return;
      }
      ctx.commit("setLoading", true);
      const resp = await getProject();
      ctx.commit("setData", resp);
      ctx.commit("setLoading", false);
    },
  },
};
