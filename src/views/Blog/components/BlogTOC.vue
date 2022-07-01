<template>
  <div class="blog-TOC-container">
    <h2>目录</h2>
    <RightList :list="list" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "./RightList";
export default {
  components: {
    RightList,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    // 处理抛出事件
    handleSelect(item) {
      // 赋值到对应的哈希值上
      window.location.hash = item.anchor;
    },
  },
  computed: {
    list() {
      console.log(this.$route.hash);
      const hash = this.$route.hash;
      return this.data.toc.map((item) => {
        return {
          ...item,
          isSelected: hash === "#" + item.anchor,
        };
      });
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
