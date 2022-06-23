import getComponentRootDom from "./getComponentRootDom";
import Icon from "@/components/Icon";
import messageStyle from "./showMessage.module.less";

/**
 * 弹出消息
 * @param {String} content 消息内容
 * @param {String} type 消息类型  info  error  success  warn
 * @param {Number} duration 多久后消失
 * @param {HTMLElement} container 容器，消息会显示到该容器的正中；如果不传，则显示到页面正中
 *
 */
export default function (options = {}) {
  const content = options.content || "无效信息";
  const type = options.type || "info";
  const duration = options.duration || 1000;
  const container = options.container || document.body;

  const dom = document.createElement("div");
  dom.classList.add(messageStyle.message);
  dom.classList.add(messageStyle[`message-${type}`]);
  // 若是传入的容器为非body的话，并且该容器的定位属性为，static的话，将容器的定位属性改为relative
  if (container.tagName !== "BODY") {
    "static" === window.getComputedStyle(container).position
      ? (container.style.position = "relative")
      : "";
  }
  //将Icon组件的dom 节点插入到创建的元素里面
  const icon = getComponentRootDom(Icon, { type: type });
  icon.classList.add(messageStyle.icon);
  dom.innerHTML = icon.outerHTML + content;
  //将元素插入到指定容器
  container.appendChild(dom);
  dom.offsetTop; //强行渲染，触发重排
  dom.style.opacity = 1;
  dom.style.transform = "translate(-50%, -50%) translateY(0)";

  //等待与一定时间后触发，弹框消失
  setTimeout(() => {
    dom.style.opacity = "";
    dom.style.transform = "translate(-50%, -50%) translateY(-30px)";
    dom.addEventListener(
      "transitionend",
      function () {
        this.remove();
        options.callback && options.callback();
      },
      { once: true } //该事件只触发一次，若有多次，只触发最后一次
    );
  }, duration);
}
