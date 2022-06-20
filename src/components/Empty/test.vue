<template>
  <div class="test-container">
    <Empty />
  </div>
</template>

<script>
import Empty from "./index.vue";
export default {
  components: {
    Empty,
  },
};
</script>

<style lang="less" scoped>
.test-container {
  position: relative;
  width: 200px;
  height: 200px;
  border: 1px solid #ccc;
}
</style>
