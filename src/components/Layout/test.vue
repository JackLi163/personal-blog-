<template>
  <div class="test-container">
    <Layout>
      <template #left>
        <div class="left">左边栏区域，宽度适应内容，溢出隐藏</div>
      </template>
      <div class="main">主区域，宽度占满剩余空间，溢出隐藏</div>
      <template #right>
        <div class="right">右边栏区域，宽度适应内容，溢出隐藏</div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./";
export default {
  components: {
    Layout,
  },
};
</script>

<style lang="less" scoped>
@height: 100%;
.test-container {
  width: 80%;
  height: 80vh;
  border: 1px solid #000;
  .left {
    width: 200px;
    height: @height;
    background: red;
  }
  .main {
    width: 100%;
    height: @height;
    background: green;
  }
  .right {
    height: @height;
    width: 250px;
    background: yellow;
  }
}
</style>
