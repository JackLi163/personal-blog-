<template>
  <div class="site-aside-container">
    <template v-if="data">
      <div class="imgs">
        <img :src="data.avatar" alt="" />
      </div>
      <h1 class="title">{{ data.siteTitle }}</h1>
    </template>
    <Menu />
    <template v-if="data">
      <Contact />
      <p class="icp">{{ data.icp }}</p>
    </template>
  </div>
</template>

<script>
import Contact from "./Contact";
import Menu from "./Menu";
import "@/styles/globel.less";
import { mapState } from "vuex";
export default {
  components: {
    Contact,
    Menu,
  },
  computed: mapState("setting", ["data"]),
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.site-aside-container {
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, @dark / 2, @words / 2);
  overflow-y: auto;
  overflow-x: hidden;
  padding: 8px 5px;
  user-select: none;
  .imgs {
    width: 150px;
    height: 150px;
    margin: 0 auto 15px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }
  }
  .title {
    color: #b8b6b6;
    text-align: center;
    font-size: 21px;
    font-weight: 300;
  }
  .icp {
    font-size: 12px;
    color: @words;
    text-align: center;
  }
}
</style>
