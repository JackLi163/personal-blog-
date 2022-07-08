<template>
  <div class="blog-TOC-container">
    <h2>目录</h2>
    <RightList :list="toWithSelect" @select="handleClick" />
  </div>
</template>

<script>
import RightList from "./RightList";
import { debounce } from "@/utils";
export default {
  data() {
    return {
      activeAnchor: "",
    };
  },
  components: {
    RightList,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  created() {
    // 函数防抖
    this.fn = debounce(this.setSelect, 50);
    //当组件注入时，创建或添加事件总线里面对应的事件的方法
    this.$Bus.$on("mainScroll", this.fn);
    //将页面跳到哈希值对应的位置
    this.reload();
  },

  destroyed() {
    //当组件销毁时，注销事件总线里面对应的事件
    this.$Bus.$off("mainScroll", this.fn);
  },

  methods: {
    //当重新进入该页面时候，会根据地址栏的hash值跳到对应位置
    reload() {
      // 保存当前哈希值
      const hash = location.hash;
      // 清空哈希值
      location.hash = "";
      let timer = null;
      clearTimeout(timer);
      // 等待一段时间后加载哈希值
      timer = setTimeout(() => {
        location.hash = hash;
      }, 50);
    },
    setSelect() {
      //设置规定区域
      const bottom = 200;
      //  由于后续要重新设置，先清空之前的状态
      this.activeAnchor = "";
      for (const dom of this.doms) {
        if (!dom) {
          return;
        }
        const top = dom.getBoundingClientRect().top;
        //当元素位于规定区域时候，选中该元素
        if (top >= 0 && top <= bottom) {
          this.activeAnchor = dom.id;
          return;
          // 当没有元素位于规定区域，则将位于规定区域上方的所有
          // 元素进行选择，由于上一个会覆盖下一个，所以最终选择为离规定区域上方最近的一个元素
        } else if (top < 0) {
          this.activeAnchor = dom.id;
        }
      }
    },
    // 点击目录改变hash值
    handleClick(dom) {
      window.location.hash = dom.anchor;
    },
  },
  computed: {
    //将所有目录所对应的dom元素取出
    doms() {
      const doms = [];
      const addToDom = (toc) => {
        for (const t of toc) {
          //将t对象的anchor对应dom元素的id值
          doms.push(document.getElementById(t.anchor));
          if (t.children) {
            addToDom(t.children);
          }
        }
      };
      addToDom(this.data.toc);
      return doms;
    },
    //将获取到的远程数据进行重映射，给每个对象增加是否选中的标记值
    toWithSelect() {
      const getTOC = (toc = []) => {
        return toc.map((item) => ({
          ...item,
          isSelected: item.anchor === this.activeAnchor,
          children: getTOC(item.children),
        }));
      };
      return getTOC(this.data.toc);
    },
  },
};
</script>

<style lang="less" scoped>
.blog-TOC-container {
  width: 280px;
  padding: 30px;
  h2 {
    font-size: 20px;
    margin: -15px 0 10px -5px;
  }
}
</style>
