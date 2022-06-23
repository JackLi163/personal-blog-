<template>
  <div class="test-container">
    <Menu />
  </div>
</template>

<script>
import Menu from "./";
import "@/styles/globel.less";
export default {
  components: {
    Menu,
  },
};
</script>

<style lang="less" scoped>
.test-container {
  width: 200px;
  height: 500px;
  margin: 100px auto;
  background: #000;
}
</style>
