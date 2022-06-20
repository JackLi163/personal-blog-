<template>
  <div class="empty-container">
    <Icon class="empty-item" type="empty"/>
    <span>{{text}}</span>
  </div>
</template>

<script>
import Icon from '@/components/Icon'
export default {
  name: "Empty",
  props: {
    text:{
      type: String,
      default:"无数据"
  }
    
  },
    components: {
        Icon
    }
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
    .empty-container{
        position: absolute;
        color:@gray;
        left: 50%;
        top: 50%;
        text-align: center;
        transform: translate(-50%,-50%);
        .empty-item{
          font-size: 2em;
          display: block;
        }
    }
</style>