<template>
  <div class="blog-comment-container">
    <MessageArea
      :subTitle="data.total"
      :list="data.rows"
      :isListLoading="isloading"
      @submit="handleSelect"
    />
    <div class="bottom" v-if="ismoreTotal">到底了...../(ㄒoㄒ)/~~</div>
  </div>
</template>

<script>
import "@/styles/globel.less";
import MessageArea from "@/components/MessageArea/index.vue";
import { getComments } from "@/api/blog";
import { postComments } from "@/api/blog";
import fetchData from "@/mixins/fetchData";
import loadMore from "@/mixins/loadMore";
export default {
  mixins: [
    fetchData({ total: 0, rows: [] }),
    loadMore({ get: getComments, post: postComments }, "提交成功"),
  ],
  components: {
    MessageArea,
  },

  methods: {
    //   //加载远程数据
    async fetchData() {
      return await getComments(this.page++, 10, this.$route.params.id);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.blog-comment-container {
  margin-top: 80px;
  padding-top: 20px;
  .bottom {
    font-size: 20px;
    color: @gray;
    text-align: center;
    margin-top: -100px;
  }
}
</style>
