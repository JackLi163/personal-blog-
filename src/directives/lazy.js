import Vue from "vue";
import $Bus from "@/eventBus";
import { debounce } from "@/utils";
import default_gif from "@/assets/default.gif";
let imgs = [];

//设置所有图片的路径
function setImgs() {
  for (const img of imgs) {
    const rect = img.dom.getBoundingClientRect();
    //将数组中的所有元素图片设为默认图片
    img.dom.src = default_gif;
    //当元素在视口中的时候加载图片
    if (rect.top + rect.height > 0 && rect.top < document.documentElement.clientHeight) {
      //新建一个临时图片来判断图片是否加载完成

      if (img.url === null) {
        img.dom.src = "";
      } else {
        const tempImg = new Image();
        tempImg.onload = () => {
          img.dom.src = img.url;
        };
        tempImg.src = img.url;
      }

      // 将加载过得图片元素从数组中移除
      imgs = imgs.filter((i) => i !== img);
    }
  }
}
const fn = debounce(setImgs, 100);
Vue.directive("lazy", {
  // 被绑定元素插入父节点时调用
  inserted(el, binding) {
    imgs.push({ dom: el, url: binding.value });
    //元素插入后运行该函数初始化
    setImgs();
  },
  // 指令与元素解绑时调用
  unbind(el) {
    //将销毁的元素从数组中取出
    imgs = imgs.filter((i) => i.dom !== el);
  },
});

$Bus.$on("mainScroll", fn);
