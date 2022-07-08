import Vue from "vue";
import Vuex from "vuex";
import banner from "./banner";
import setting from "./setting";

Vue.use(Vuex); // 应用vuex插件

export default new Vuex.Store({
  modules: {
    banner,
    setting,
  },
  strict: true,
});
