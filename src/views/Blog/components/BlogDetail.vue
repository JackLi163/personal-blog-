<template>
  <div class="blog-detail-container">
    <h1>{{ data.title }}</h1>
    <div class="aside">
      <span class="date">日期:{{ utils(data.createDate) }}</span>
      <span class="browse">浏览:{{ data.scanNumber }}</span>
      <a href="" class="comments">评论:{{ data.commentNumber }}</a>
      <router-link
        class="catagor"
        :to="{
          name: 'CategoryBlog',
          params: {
            catagorId: data.category.id,
          },
        }"
        >{{ data.category.name }}</router-link
      >
    </div>
    <div class="markdown-body" v-html="data.htmlContent"></div>
  </div>
</template>

<script>
import utils from "@/utils/format";
import "@/styles/markdown.css";
import "highlight.js/styles/github.css";
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    utils,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.blog-detail-container {
  h1 {
    margin: 20px 0;
  }
  .aside {
    color: @lightWords;
    font-size: 12px;
    margin-bottom: 25px;
    .date,
    .browse,
    .comments,
    .catagor {
      margin-right: 18px;
    }
  }
}
</style>
