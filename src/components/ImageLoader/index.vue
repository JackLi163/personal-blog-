<template>
  <div class="image-loader-container">
    <img class="placeholder" :src="placeholder" v-if="!loadOver" />
    <img
      @load="ImgLoda"
      :src="src"
      :style="{ opacity: isShowOrigin, transition: `${duration}ms` }"
    />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    duration: {
      type: Number,
      default: 500,
    },
  },
  data() {
    return {
      //原图load触发后该属性变为true
      originLoad: false,
      //动画结束发后该属性变为true，非原图删除
      loadOver: false,
    };
  },
  computed: {
    //显示原图
    isShowOrigin() {
      return this.originLoad ? 1 : 0;
    },
  },
  methods: {
    //load事件执行时触发该函数
    ImgLoda() {
      this.originLoad = true;
      //   动画结束时执行该函数
      setTimeout(() => {
        this.loadOver = true;
        //抛出事件
        this.$emit("load");
      }, this.duration);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.image-loader-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  img {
    .abs-fill();
    object-fit: cover;
    &.placeholder {
      filter: blur(2vw);
    }
  }
}
</style>
