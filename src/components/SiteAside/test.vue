<template>
  <div class="test-container">
    <SiteAside />
  </div>
</template>

<script>
import SiteAside from "./";
export default {
  components: {
    SiteAside,
  },
};
</script>

<style lang="less" scoped>
.test-container {
  height: 100vh;
  width: 300px;
  margin: 0 auto;
}
</style>
