let routeTitle = "";
let siteTitle = "";

//设置网站title标语
function setTitle() {
  if (!routeTitle && !siteTitle) {
    document.title = "loading";
  } else if (routeTitle && !siteTitle) {
    document.title = routeTitle;
  } else if (!routeTitle && siteTitle) {
    document.title = siteTitle;
  } else {
    document.title = routeTitle + "-" + siteTitle;
  }
}
export default {
  //设置路由路径为标题
  setRouteTitle(title) {
    routeTitle = title;
    setTitle();
  },
  //设置网站标题
  setSiteTitle(title) {
    siteTitle = title;
    setTitle();
  },
};
