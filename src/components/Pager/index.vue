<template>
  <div class="pager-container" v-if="pageNumber > 1">
    <a @click="pageChangeClick(1)" :class="{ disabled: current === 1 }"
      >首页</a
    >
    <a
      @click="pageChangeClick(current - 1)"
      :class="{ disabled: current === 1 }"
      >上一页</a
    >
    <a
      v-for="(item, i) in pageArr"
      :class="{ active: current === item }"
      :key="i"
      @click="pageChangeClick(item)"
      >{{ item }}</a
    >
    <a
      @click="pageChangeClick(current + 1)"
      :class="{ disabled: current === pageNumber }"
      >下一页</a
    >
    <a
      @click="pageChangeClick(pageNumber)"
      :class="{ disabled: current === pageNumber }"
      >尾页</a
    >
  </div>
</template>

<script>
export default {
  props: {
    // 当前页码
    current: {
      type: Number,
      default: 1,
    },
    // 总数据量
    total: {
      type: Number,
      default: 0,
    },
    // 页容量
    limit: {
      type: Number,
      default: 10,
    },
    // 可见页码数
    visibleNumber: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    //总页码数
    pageNumber() {
      return Math.ceil(this.total / this.limit);
    },
    //显示的最小页码数
    pageMin() {
      let min = this.current - Math.floor(this.visibleNumber / 2);
      min < 1 ? (min = 1) : "";
      return min;
    },
    //显示的最大页码数
    pageMax() {
      let max = this.pageMin + this.visibleNumber - 1;
      max > this.pageNumber ? (max = this.pageNumber) : "";
      return max;
    },
    pageArr() {
      const nums = [];
      for (let i = this.pageMin; i <= this.pageMax; i++) {
        nums.push(i);
      }
      return nums;
    },
  },
  methods: {
    pageChangeClick(newPage) {
      if (
        newPage < 1 ||
        newPage > this.pageNumber ||
        newPage === this.current
      ) {
        return;
      }
      console.log(newPage);
      this.$emit("pageChange", newPage);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.pager-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  user-select: none;
  a {
    margin: 0 7px;
    cursor: pointer;
    &.disabled {
      color: @lightWords;
      cursor: not-allowed;
    }
    &.active {
      color: @words;
      font-weight: bold;
      cursor: text;
    }
  }
}
</style>
