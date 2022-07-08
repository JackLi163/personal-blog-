export default function (dom) {
  return {
    mounted() {
      // 当vue挂载后，绑定滚动条事件
      this.$refs[dom].addEventListener("scroll", this.mainScrollHandlerScroll);
      this.$Bus.$on("setMainScroll", this.mainScrollOnTop);
    },
    beforeDestroy() {
      //当组件销毁时候取消事件绑定
      this.$refs[dom].removeEventListener("scroll", this.mainScrollHandlerScroll);
      //当组件销毁时候给其他组件传递一个undefined参数过去吧，表示组件销毁
      this.$Bus.$emit("mainScroll");
      this.$Bus.$off("setMainScroll", this.mainScrollOnTop);
    },
    methods: {
      //当运行该函数的时候运行事件总线里面绑定的事件函数
      mainScrollHandlerScroll() {
        this.$Bus.$emit("mainScroll", this.$refs[dom]);
      },
      mainScrollOnTop(scrollNumber) {
        this.$refs[dom].scrollTop = scrollNumber;
      },
    },
  };
}
