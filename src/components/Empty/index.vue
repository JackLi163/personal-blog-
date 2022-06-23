<template>
  <div class="empty-container">
    <Icon type="empty" />
    <span>{{ text }}</span>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  name: "Empty",
  props: {
    text: {
      type: String,
      default: "无数据",
    },
  },
  components: {
    Icon,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@import "~@/styles/mixin.less";
.empty-container {
  .abs-center(absolute);
  text-align: center;
  color: @gray;
  .icon-container {
    font-size: 2em;
    display: block;
  }
}
</style>
