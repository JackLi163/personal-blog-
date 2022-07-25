import Vue from "vue";
import { Store, install } from "vuex";
import banner from "./banner";
import setting from "./setting";
import about from "./about";
import project from "./project";
if (!window.Vue) {
  install(Vue); // 应用vuex插件
}

export default new Store({
  modules: {
    banner,
    setting,
    about,
    project,
  },
  strict: true,
});
