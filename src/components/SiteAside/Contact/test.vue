<template>
  <div class="test-container">
    <Contact />
  </div>
</template>

<script>
import Contact from "./";
import "@/styles/globel.less";
export default {
  components: {
    Contact,
  },
};
</script>

<style lang="less" scoped>
.test-container {
  margin-top: 100px;
  background: #000;
  width: 220px;
  height: 300px;
}
</style>
