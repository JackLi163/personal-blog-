<template>
  <div class="detail-container" v-loading="isloading">
    <Layout>
      <div class="main" ref="mainContainer">
        <BlogDetail :data="data" v-if="data && !isloading" />
        <BlogComment v-if="data && !isloading" id="comment" />
      </div>
      <template #right v-if="!isloading">
        <div class="right" v-if="data"><BlogTOC :data="data" /></div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "@/components/Layout";
import BlogDetail from "./components/BlogDetail";
import BlogTOC from "./components/BlogTOC";
import BlogComment from "./components/BlogComment";
import { getBlog } from "@/api/blog";
import mainScroll from "@/mixins/mainScroll";
import { titleController } from "@/utils";
export default {
  data() {
    return {
      isloading: true,
      data: {
        id: "",
        category: "",
      },
    };
  },
  components: {
    Layout,
    BlogDetail,
    BlogTOC,
    BlogComment,
  },
  //加载远程数据
  async created() {
    this.data = await getBlog(this.$route.params.id);
    this.isloading = false;
    if (!this.data) {
      this.$router.push("/404");
      return;
    }
    titleController.setRouteTitle(this.data.title);
  },
  mixins: [mainScroll("mainContainer")],
  /* mounted() {
    // 当vue挂载后，绑定滚动条事件
    this.$refs.mainContainer.addEventListener("scroll", this.handlerScroll);
    this.$Bus.$on("setMainScroll", this.onTop);
  },
  beforeDestroy() {
    //当组件销毁时候取消事件绑定
    this.$refs.mainContainer.removeEventListener("scroll", this.handlerScroll);
    //当组件销毁时候给其他组件传递一个undefined参数过去吧，表示组件销毁
    this.$Bus.$emit("mainScroll");
    this.$Bus.$off("setMainScroll", this.onTop);
  },

  methods: {
    //当运行该函数的时候运行事件总线里面绑定的事件函数
    handlerScroll() {
      this.$Bus.$emit("mainScroll", this.$refs.mainContainer);
    },
    onTop(scrollNumber) {
      this.$refs.mainContainer.scrollTop = scrollNumber;
    },
  }, */
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
