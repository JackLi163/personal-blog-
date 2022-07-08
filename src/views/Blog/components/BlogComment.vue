<template>
  <div class="blog-comment-container">
    <MessageArea :subTitle="data.total" :list="data.rows" :isListLoading="isloading" @submit="handleClick" />
    <div class="bottom" v-if="ismoreTotal">到底了...../(ㄒoㄒ)/~~</div>
  </div>
</template>

<script>
import "@/styles/globel.less";
import MessageArea from "@/components/MessageArea/index.vue";
import { getComments } from "@/api/blog";
import { postComments } from "@/api/blog";
import mixin from "@/mixins/fetchData";
export default {
  mixins: [mixin({ total: 0, rows: [] })],
  components: {
    MessageArea,
  },
  data() {
    return {
      page: 1,
    };
  },
  mounted() {
    this.$Bus.$on("mainScroll", this.handleScroll);
  },
  beforeDestroy() {
    this.$Bus.$off("mainScroll", this.handleScroll);
  },

  computed: {
    //比较当前列表数量是否大于total
    ismoreTotal() {
      return this.data.total < this.data.rows.length;
    },
  },
  methods: {
    handleScroll(dom) {
      if (this.isloading || !dom) {
        return;
      }
      const dec = dom.scrollHeight - (dom.scrollTop + dom.clientHeight);
      const range = 200;
      if (dec <= range) {
        this.setLoadingComment();
      }
    },

    //加载更多
    async setLoadingComment() {
      // 大于总量的时候不进行任何操作
      if (this.ismoreTotal) {
        return;
      }
      this.isloading = true;
      const repx = await getComments({ page: this.page++ });
      this.data.rows = this.data.rows.concat(repx.rows);
      this.isloading = false;
    },

    //加载远程数据
    async fetchData() {
      return await getComments({ page: this.page++ });
    },
    async handleClick(dataForm, callback) {
      const newData = await postComments(dataForm);
      this.data.rows.unshift(newData);
      this.data.total++;
      callback("提交成功"); //当得到远程数据后，调用子组件的回调函数
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
