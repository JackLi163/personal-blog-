import Vue from "vue";
import App from "./App.vue";
import "./styles/globel.less"; //公共样式
import router from "./router"; //路由库
import { showMessage } from "./utils"; //工具库
import "./mock";

Vue.prototype.$showMessage = showMessage;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
