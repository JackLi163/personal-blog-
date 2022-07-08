import Home from "@/views/Home";
import Blog from "@/views/Blog";
import Detail from "@/views/Blog/Detail";
import About from "@/views/About";
import Project from "@/views/Project";
import Message from "@/views/Message";
export default [
  { name: "Home", path: "/", component: Home, meta: { title: "首页" } },
  { name: "Blog", path: "/blog", component: Blog, meta: { title: "文章" } },
  { name: "CategoryBlog", path: "/blog/cate/:catagorId", component: Blog, meta: { title: "文章" } },
  { name: "BlogDetail", path: "/blog/:id", component: Detail, meta: { title: "详情页" } },
  { name: "About", path: "/about", component: About, meta: { title: "关于我" } },
  { name: "Project", path: "/project", component: Project, meta: { title: "项目&效果" } },
  { name: "Message", path: "/message", component: Message, meta: { title: "留言板" } },
];
