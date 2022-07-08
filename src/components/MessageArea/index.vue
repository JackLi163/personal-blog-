<template>
  <div class="Message-area-container">
    <DataForm v-on="$listeners" />
    <DataList :subTitle="subTitle" :list="list" />
    <div class="loading" v-loading="isListLoading"></div>
  </div>
</template>

<script>
import DataForm from "./DataForm";
import DataList from "./DataList";
export default {
  components: {
    DataForm,
    DataList,
  },
  props: {
    title: {
      type: String,
      default: "列表标题",
    },
    subTitle: {
      type: Number,
      default: "",
    },
    list: {
      type: Array,
      default: () => [],
    },
    isListLoading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="less" scoped>
.Message-area-container {
  width: 100%;
  .loading {
    position: relative;
    padding-bottom: 100px;
  }
}
</style>
