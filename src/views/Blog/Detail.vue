<template>
  <div class="detail-container" v-loading="isloading">
    <Layout>
      <div class="main" v-if="data"><BlogDetail :data="data" /></div>
      <template #right v-if="data">
        <div class="right"><BlogTOC :data="data" /></div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "@/components/Layout";
import BlogDetail from "./components/BlogDetail";
import BlogTOC from "./components/BlogTOC";
import { getBlog } from "@/api/blog";
export default {
  data() {
    return {
      isloading: true,
      data: null,
    };
  },
  components: {
    Layout,
    BlogDetail,
    BlogTOC,
  },
  //加载远程数据
  async created() {
    this.data = await getBlog(this.$route.params);
    this.isloading = false;
  },
};
</script>

<style lang="less" scoped>
.detail-container {
  height: 100%;
  position: relative;

  .main {
    height: 100%;
    overflow-y: scroll;
    padding: 20px;
    scroll-behavior: smooth;
  }
  .right {
    height: 100%;
    overflow-y: auto;
  }
}
</style>
