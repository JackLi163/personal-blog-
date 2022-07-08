export default function (defaultDataValue = null) {
  return {
    data() {
      return {
        data: defaultDataValue,
        isloading: true,
      };
    },
    async created() {
      this.data = await this.fetchData(); //获取远程数据
      this.isloading = false; //该值为false则删除加载图标
    },
  };
}
