<template>
  <div class="to-top-container" ref="topContainer" :style="{ transform: `translateY(${Y}px)` }" @click="handlerClick">
    ↑TOP
  </div>
</template>

<script>
export default {
  data() {
    return {
      Y: 70,
      show: false,
    };
  },
  mounted() {
    this.$Bus.$on("mainScroll", this.handlerScroll);
  },
  destroyed() {
    this.$Bus.$off("mainScroll", this.handlerScroll);
  },
  methods: {
    //回到顶部
    handlerClick() {
      this.$Bus.$emit("setMainScroll", 0);
    },

    //判断该组件是否显示
    handlerScroll(dom) {
      if (!dom) {
        this.Y = 70;
        this.show = false;
        return;
      }
      const top = Math.floor(dom.scrollTop);
      const height = Math.floor(dom.scrollHeight);
      if (height / top <= 2 && !this.show) {
        this.Y = 0;
        // 将锁开启
        this.show = true;
      } else if (height / top > 2 && this.show) {
        //将锁关闭
        this.show = false;
        //将元素暂时性往上移动
        this.Y = -30;
        //500毫秒后元素往下移动直至消失
        let timer = null;
        clearTimeout(timer);
        timer = setTimeout(() => {
          this.Y = 70;
        }, 500);
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.to-top-container {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: #fff;
  background: @primary;
  text-align: center;
  line-height: 50px;
  position: fixed;
  right: 30px;
  bottom: 20px;
  cursor: pointer;
  transition: 0.5s;
}
</style>
