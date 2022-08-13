import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./router";
import { titleController } from "@/utils";
if (!window.VueRouter) {
  Vue.use(VueRouter);
}
const route = new VueRouter({
  routes,
  mode: "history",
});
export default route;
route.afterEach((to) => {
  if (to.meta.title) {
    titleController.setRouteTitle(to.meta.title);
  } else {
    titleController.setRouteTitle("");
  }
});
