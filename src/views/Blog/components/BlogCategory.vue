<template>
  <div class="blog-category-container" v-loading="isloading">
    <h1>文章分类</h1>
    <RightList :list="list" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "./RightList";
import { getBlogtype } from "@/api/blog";
import mixin from "@/mixins/fetchData";
export default {
  mixins: [mixin([])],
  components: {
    RightList,
  },
  methods: {
    async fetchData() {
      return await getBlogtype();
    },
    // 处理点击分类事件
    handleSelect(item) {
      // 当点击的分类跟当前分类相同不进行处理
      if (+item.id === this.routeInfo.catagorId) {
        return;
      }

      const query = {
        page: 1,
        limit: this.routeInfo.limit,
      };
      // 没有分类
      if (item.id === -1) {
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        this.$router.push({
          name: "CategoryBlog",
          query,
          params: {
            catagorId: +item.id,
          },
        });
      }
    },
  },
  computed: {
    // 初始化路由并获取数据
    routeInfo() {
      const catagorId = +this.$route.params.catagorId || -1;
      const limit = +this.$route.query.limit || 10;
      return { catagorId, limit };
    },
    // 对远程数据进行处理
    list() {
      const totalArticleCount = this.data.reduce((a, b) => a + b.articleCount, 0);

      const result = [
        {
          name: "全部",
          id: -1,
          articleCount: totalArticleCount || 0,
        },
        ...this.data,
      ];
      return result.map((item) => ({
        ...item,
        isSelected: this.routeInfo.catagorId === item.id,
        articleCount: item.articleCount + "篇",
      }));
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.blog-category-container {
  position: relative;
  width: 300px;
  overflow-y: auto;
  height: 100%;
  padding: 20px;
  color: @words;
  h1 {
    font-size: 18px;
    margin-left: -5px;
    margin-bottom: 10px;
  }
}
</style>
