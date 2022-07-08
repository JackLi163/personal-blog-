<template>
  <ul class="right-list-container">
    <li v-for="(item, i) in list" :key="i" @click.stop="handleClick(item)">
      <span :class="{ selected: item.isSelected }">{{ item.name }}</span>
      <span :class="{ selected: item.isSelected, countNumber: true }">{{ item.articleCount }}</span>
      <!-- 递归该组件 -->
      <RightList :list="item.children" @select="handleClick" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "RightList",
  methods: {
    handleClick(item) {
      this.$emit("select", item);
    },
  },
  props: {
    list: {
      // 数组结构[{name：必传,isSelected:(为真选中，为假不选中，不传为假)（可选）children:[name:必填，children：[]]}....]
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.right-list-container {
  .right-list-container {
    margin-left: 2em;
  }

  li {
    cursor: pointer;
    min-height: 40px;
    line-height: 40px;
    font-size: 15px;
    .countNumber {
      font-size: 12px;
      margin-left: 1em;
      color: @gray;
    }
  }
  .selected {
    color: @warn !important;
  }
}
</style>
