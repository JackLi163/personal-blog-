export default function (fetch = {}, message = "成功") {
  const get = fetch.get;
  const post = fetch.post;
  return {
    data() {
      return {
        page: 1,
      };
    },
    mounted() {
      this.$Bus.$on("mainScroll", this.handleScroll);
    },
    beforeDestroy() {
      this.$Bus.$off("mainScroll", this.handleScroll);
    },

    computed: {
      //比较当前列表数量是否大于total
      ismoreTotal() {
        const total = this.data.total || 0;
        const rows = this.data.rows || [];
        return total < rows.length;
      },
    },
    methods: {
      handleScroll(dom) {
        if (this.isloading || !dom) {
          return;
        }
        const dec = dom.scrollHeight - (dom.scrollTop + dom.clientHeight);
        const range = 200;
        if (dec <= range) {
          this.setLoadingComment();
        }
      },

      //加载更多
      async setLoadingComment() {
        // 大于总量的时候不进行任何操作
        if (this.ismoreTotal) {
          return;
        }
        this.isloading = true;
        const repx = await get({ page: this.page++ });
        this.data.rows = this.data.rows.concat(repx.rows);
        this.isloading = false;
      },

      async handleSelect(dataForm, callback) {
        const newData = await post(dataForm);
        this.data.rows.unshift(newData);
        this.data.total++;
        callback(message); //当得到远程数据后，调用子组件的回调函数
      },
    },
  };
}
