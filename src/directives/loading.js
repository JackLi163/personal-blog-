import Vue from "vue";
import style from "@/directives/loading.module.less";
import url from "@/assets/loading.svg";

/**
 * 生成元素img，并插入到指定容器
 * @param {} dom
 */
function createNode(dom) {
  const img = document.createElement("img");
  img.src = url;
  img.dataset.name = "loading";
  img.className = style.loading;
  dom.appendChild(img);
}
/**
 * 判断img元素是否存在
 * @param {} dom
 * @returns boolead
 */
function isExistLoadingNode(dom) {
  return dom.querySelector("img[data-name=loading]");
}

Vue.directive("loading", function (el, binding) {
  if (!isExistLoadingNode(el)) {
    createNode(el);
  }
  // 判断binging的值是否为假，若是将img元素删除
  !binding.value ? isExistLoadingNode(el).remove() : "";
});
