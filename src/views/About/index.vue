<template>
  <div class="about-container" v-loading="isloading || srcLoaded">
    <iframe class="about-content" @load="srcLoaded = false" :src="src" frameborder="0"></iframe>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      srcLoaded: true,
    };
  },
  created() {
    this.$store.dispatch("about/fetchAbout");
  },
  computed: mapState("about", {
    isloading: "isloading",
    src: "data",
  }),
};
</script>

<style lang="less" scoped>
.about-container {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  .about-content {
    width: 100%;
    height: 100%;
    display: block;
  }
}
</style>
