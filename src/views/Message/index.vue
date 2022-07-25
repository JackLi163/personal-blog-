<template>
  <div class="message-container" ref="container">
    <MessageArea
      class="message"
      :subTitle="data.total"
      :list="data.rows"
      :isListLoading="isloading"
      @submit="handleSelect"
    />
    <div class="bottom" v-if="ismoreTotal">到底了...../(ㄒoㄒ)/~~</div>
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData";
import mainScroll from "@/mixins/mainScroll";
import * as message from "@/api/message";
import loadMore from "@/mixins/loadMore";
export default {
  mixins: [
    fetchData({ total: 0, list: [] }),
    mainScroll("container"),
    loadMore({ get: message.getMessage, post: message.postMessage }, "留言成功"),
  ],
  components: {
    MessageArea,
  },
  methods: {
    async fetchData() {
      return await message.getMessage(this.page);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.message-container {
  height: 100%;
  width: 100%;
  overflow-y: auto;
  scroll-behavior: smooth;
  .message {
    width: 700px;
    margin: 30px auto;
  }
  .bottom {
    font-size: 20px;
    color: @gray;
    text-align: center;
    margin-top: -100px;
  }
}
</style>
