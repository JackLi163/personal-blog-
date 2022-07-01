export default function (defaultDataValue = null) {
  return {
    data() {
      return {
        data: defaultDataValue,
        isloading: true,
        isShow: false,
        maxIndex: 0,
      };
    },
    async created() {
      this.data = await this.fetchData(); //获取远程数据
      this.maxIndex = this.data.length; //数据的数组长度
      this.isShow = true; //该值为真表示数据加载到，显示上下箭头
      this.isloading = false; //该值为false则删除加载图标
    },
  };
}
