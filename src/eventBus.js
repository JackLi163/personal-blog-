// const listeners = {};
// export default {
//   //给指定的监听事件添加对应函数
//   $on(eventName, handler) {
//     // 判断监听列表里有没有该事件，使用Set是为了防止函数重复
//     if (!listeners[eventName]) {
//       listeners[eventName] = new Set();
//     }
//     listeners[eventName].add(handler);
//   },
//   //取消指定事件的对应函数
//   $off(eventName, handler) {
//     //判断该事件是否存在
//     if (!listeners[eventName]) {
//       return;
//     }
//     listeners[eventName].delete(handler);
//   },
//   //当事件触发时候，触发该事件总线对应的函数
//   $emit(eventName, ...args) {
//     if (!listeners[eventName]) {
//       return;
//     }
//     for (const handler of listeners[eventName]) {
//       handler(...args);
//     }
//   },
// };
// 使用Vue实例中的成员$on,$off,$emit

/*
 * 事件名：mainScroll
 * 含义：主区域滚动条位置变化后触发
 * 参数：
 * - 滚动的dom元素，如果是undefined，则表示dom元素已经不存在
 *
 * 事件名：setMainScroll
 * 含义：当需要设置主区域滚动条位置时触发
 * 参数：
 * - 滚动高度
 */
Vue.prototype.$bus = new Vue({});

import Vue from "vue";
export default new Vue({});
