<template>
  <div
    class="carouselitem-container"
    ref="containerSize"
    @mousemove="setImgPosition"
    @mouseleave="setImgCenter"
  >
    <ImageLoader
      class="img"
      :src="src"
      :placeholder="placeholder"
      ref="imgSize"
      :style="{
        transform: `translate(${imgPositionX}, ${imgPositionY})`,
      }"
    />
    <div class="container">
      <h2 ref="title">{{ title }}</h2>
      <p ref="description">{{ description }}</p>
    </div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  props: ["src", "placeholder", "title", "description"],
  components: {
    ImageLoader,
  },
  data() {
    return {
      titleWidth: 0,
      descriptionWidth: 0,
      imgPositionX: 0,
      imgPositionY: 0,
    };
  },
  mounted() {
    this.setTextAnimation();
    this.setImgCenter();
    window.addEventListener("resize", this.setImgCenter);
  },
  destroyed() {
    window.removeEventListener("resize", this.setImgCenter);
  },
  methods: {
    //根据鼠标位置设置图片的位置
    setImgPosition(e) {
      //获取dom元素到body的距离
      const domToTop = this.$refs.containerSize.getBoundingClientRect().top; // dom 的顶边到视口顶部的距离
      const domToLeft = this.$refs.containerSize.getBoundingClientRect().left;
      // 计算图片的最新位置，公式为鼠标相对于图片父元素的位置/图片父元素的宽度或高度*图片宽度或高度=图片的新位置
      this.imgPositionX =
        (-(e.clientX - domToLeft) / this.$refs.containerSize.clientWidth) *
          -(
            this.$refs.containerSize.clientWidth -
            this.$refs.imgSize.$el.clientWidth
          ) +
        "px";
      this.imgPositionY =
        (-(e.clientY - domToTop) / this.$refs.containerSize.clientHeight) *
          -(
            this.$refs.containerSize.clientHeight -
            this.$refs.imgSize.$el.clientHeight
          ) +
        "px";
    },
    //设置图片居中
    setImgCenter() {
      this.imgPositionX =
        (this.$refs.containerSize.clientWidth -
          this.$refs.imgSize.$el.clientWidth) /
          2 +
        "px";
      this.imgPositionY =
        (this.$refs.containerSize.clientHeight -
          this.$refs.imgSize.$el.clientHeight) /
          2 +
        "px";
    },
    // 设置文字的动画效果
    setTextAnimation() {
      this.titleWidth = this.$refs.title.clientWidth;
      this.descriptionWidth = this.$refs.description.clientWidth;
      this.$refs.title.style.width = 0;
      this.$refs.description.style.width = 0;
      this.$refs.title.style.opacity = 1;
      this.$refs.description.style.opacity = 1;
      this.$refs.title.clientWidth; //强制让浏览器渲染
      this.$refs.title.style.width = this.titleWidth + "px";
      this.$refs.description.style.width = this.descriptionWidth + "px";
    },
  },
};
</script>
<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.carouselitem-container {
  height: 100%;
  width: 100%;
  position: relative;
  .img {
    height: 110%;
    width: 110%;
  }
  .container {
    .abs-center-y();
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5), -1px -1px 0px #00000080;
    margin-left: 35px;
    letter-spacing: 3px;

    h2 {
      font-size: 2em;
      color: #fff;
      font-weight: 100;
      margin-bottom: 20px;
      transition: 2s;
      display: inline-block;
    }
    p {
      font-size: 1.2em;
      transition: 2s 2s;
      color: @gray;
    }
    h2,
    p {
      opacity: 0;
      white-space: nowrap;
      overflow: hidden;
    }
  }
}
</style>
