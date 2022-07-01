<template>
  <div
    v-loading="isloading"
    class="home-container"
    ref="container"
    @wheel="handleWheel"
  >
    <ul
      :style="{
        marginTop,
      }"
      @transitionend="switching = false"
    >
      <li v-for="banner in data" :key="banner.id">
        <Carouselitem
          :src="banner.bigImg"
          :placeholder="banner.midImg"
          :title="banner.title"
          :description="banner.description"
        />
      </li>
    </ul>
    <!-- 向上翻页 -->
    <div
      v-show="isShow && index > 0"
      class="arrow-up arrow"
      @click="changeIndexNumber(index - 1)"
    >
      <Icon type="arrowUp" />
    </div>
    <!-- 向下翻页 -->
    <div
      v-show="isShow && index < maxIndex - 1"
      class="arrow-down arrow"
      @click="changeIndexNumber(index + 1)"
    >
      <Icon type="arrowDown" />
    </div>
    <!-- 生成指示器 -->
    <div class="pointer">
      <span
        v-for="(banner, i) in data"
        :key="banner.id"
        :class="{ active: index === i }"
        @click="changeIndexNumber(i)"
      ></span>
    </div>
  </div>
</template>

<script>
import banner from "@/api/banner";
import Icon from "@/components/Icon";
import Carouselitem from "./Carouselitem";
import mixin from "@/mixins/fetchData";
export default {
  components: {
    Carouselitem,
    Icon,
  },
  mixins: [mixin([])],
  data() {
    return {
      index: 0,
      containerHeight: 0,
      switching: false,
    };
  },
  computed: {
    marginTop() {
      return -this.index * this.containerHeight + "px"; //改变margin-top的值
    },
  },
  mounted() {
    //计算最外层容器的高度
    this.containerHeight = this.$refs.container.clientHeight;
    //绑定resize事件，当用户调整浏览器的大小的时候，自动根据浏览器的宽高，算出图片居中位置
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    // 当组件被销毁时，取消绑定事件
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    // 远程加载数据
    async fetchData() {
      return await banner();
    },

    changeIndexNumber(newIndex) {
      this.index = newIndex; //将新的index值赋值给原来的index
    },
    //当浏览器的大小发生变化的时候，重新改变containerHeight的值，间接改变margin-top
    handleResize() {
      this.containerHeight = this.$refs.container.clientHeight;
    },
    //通过滚轮改变index值
    handleWheel(e) {
      // 通过一个锁来对滚轮事件进行约束
      if (this.switching) {
        return;
      }
      // 判读滚轮滚动的程度来进行约束
      if (e.deltaY < -20) {
        this.index--;
        //判读index值是否小于零，若是的话将index置为零，若不是则将锁开启，约束滚轮事件
        this.index < 0 ? (this.index = 0) : (this.switching = true);
      } else if (e.deltaY > 20) {
        this.index++;
        //判读index值是否大于maxindex，若是的话将index置为maxindex，若不是则将锁开启，约束滚轮事件
        this.index > this.maxIndex - 1
          ? (this.index = this.maxIndex - 1)
          : (this.switching = true);
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
@distance: 20px;
@keyframes swing {
  0% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(-10px);
  }
}
.home-container {
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;

  .arrow {
    font-size: 35px;
    .abs-center-x();
    color: @lightWords;
    cursor: pointer;
    animation: swing 3s infinite;
    &.arrow-up {
      top: @distance;
    }
    &.arrow-down {
      bottom: @distance;
    }
  }

  .pointer {
    .abs-center-y();
    right: @distance;
    span {
      display: block;
      width: 10px;
      height: 10px;
      background: @words;
      border-radius: 50%;
      margin-bottom: 5px;
      border: 1px solid #fff;
      cursor: pointer;
      &.active {
        background: #fff;
      }
    }
  }
  ul {
    width: 100%;
    // height: 100%;
    transition: 1s;
    li {
      width: 100%;
      // height: 100%;
      height: 100vh;
      overflow: hidden;
    }
  }
}
</style>
