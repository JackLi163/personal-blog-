<template>
  <div class="site-aside-container">
    <div class="imgs">
      <img
        src="https://gss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/4afbfbedab64034f9fddff01a9c379310a551da0.jpg"
        alt=""
      />
    </div>
    <Menu />
    <Contact />
  </div>
</template>

<script>
import Contact from "./Contact";
import Menu from "./Menu";
import "@/styles/globel.less";
export default {
  components: {
    Contact,
    Menu,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.site-aside-container {
  widows: 100%;
  height: 100%;
  background: linear-gradient(to bottom, @dark / 2, @words / 2);
  overflow-y: auto;
  overflow-x: hidden;
  padding: 8px 0;
  .imgs {
    width: 150px;
    height: 150px;
    margin: 0 auto 30px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }
  }
}
</style>
