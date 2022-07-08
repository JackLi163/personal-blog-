<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <SiteAside />
      </template>
      <div class="main">
        <router-view></router-view>
      </div>
      <template #right>
        <div class="right"></div>
      </template>
    </Layout>
    <ToTop />
  </div>
</template>

<script>
import Layout from "@/components/Layout";
import SiteAside from "@/components/SiteAside";
import ToTop from "@/components/ToTop";
export default {
  components: {
    Layout,
    SiteAside,
    ToTop,
  },
};
</script>

<style lang="less" scoped>
.app-container {
  height: 100vh;
  .main {
    height: 100%;
  }
}
</style>
