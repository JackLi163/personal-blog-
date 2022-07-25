import "nprogress/nprogress.css";
import { start, done, configure } from "nprogress";

configure({
  trickleSpeed: 20,
  showSpinner: false,
});

function delay(timer) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timer);
  });
}

function getPageComponent(pageComRrsolver) {
  return async () => {
    start();
    if (process.env.NODE_ENV === "development") {
      await delay(2000);
    }
    const comp = await pageComRrsolver();
    done();
    return comp;
  };
}

export default [
  {
    name: "Home",
    path: "/",
    component: getPageComponent(() => import(/* webpackChunkName: "home" */ "@/views/Home")),
    meta: { title: "首页" },
  },
  {
    name: "Blog",
    path: "/blog",
    component: getPageComponent(() => import(/* webpackChunkName: "blog" */ "@/views/Blog")),
    meta: { title: "文章" },
  },
  {
    name: "CategoryBlog",
    path: "/blog/cate/:catagorId",
    component: getPageComponent(() => import(/* webpackChunkName: "blog" */ "@/views/Blog")),
    meta: { title: "文章" },
  },
  {
    name: "BlogDetail",
    path: "/blog/:id",
    component: getPageComponent(() =>
      import(/* webpackChunkName: "detail" */ "@/views/Blog/Detail")
    ),
    meta: { title: "详情页" },
  },
  {
    name: "About",
    path: "/about",
    component: getPageComponent(() => import(/* webpackChunkName: "about" */ "@/views/About")),
    meta: { title: "关于我" },
  },
  {
    name: "Project",
    path: "/project",
    component: getPageComponent(() => import(/* webpackChunkName: "project" */ "@/views/Project")),
    meta: { title: "项目&效果" },
  },
  {
    name: "Message",
    path: "/message",
    component: getPageComponent(() => import(/* webpackChunkName: "message" */ "@/views/Message")),
    meta: { title: "留言板" },
  },
  {
    name: "NotFount",
    path: "*",
    component: getPageComponent(() =>
      import(/* webpackChunkName: "notFount" */ "@/views/NotFount")
    ),
    meta: { title: "404" },
  },
];
