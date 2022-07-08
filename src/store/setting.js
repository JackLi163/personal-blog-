import getSetting from "@/api/setting";
import { titleController } from "@/utils";
export default {
  namespaced: true,
  state: {
    isloading: false,
    data: null,
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
    async fetchSetting(ctx) {
      if (ctx.state.data) {
        return;
      }

      ctx.commit("setLoading", true);
      let resp = await getSetting();
      ctx.commit("setData", resp);
      ctx.commit("setLoading", false);
      if (!document.querySelector("link[rel='shortcut icon']")) {
        if (!resp.favicon) {
          return;
        }
        const link = document.createElement("link");
        link.rel = "shortcut icon";
        link.href = resp.favicon;
        document.head.appendChild(link);
      }
      //设置网站标题
      if (resp.siteTitle) {
        titleController.setSiteTitle(resp.siteTitle);
      }
    },
  },
};
