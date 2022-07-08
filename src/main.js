import Vue from "vue";
import App from "./App.vue";
import "./styles/globel.less"; //公共样式
import router from "./router"; //路由库
import { showMessage } from "./utils"; //工具库
import "./mock";
import store from "./store";
import "./directives/loading"; //自定义指令loading全局注册
import eventBus from "./eventBus"; //事件总线
import "./directives/lazy"; //自定义指令lazy全局注册
Vue.prototype.$Bus = eventBus;
Vue.prototype.$showMessage = showMessage;
store.dispatch("setting/fetchSetting");

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
