<template>
  <div class="data-list-container">
    <h2 class="title" v-if="subTitle">
      {{ title }} <span>({{ subTitle }})</span>
    </h2>
    <ul>
      <li v-for="item in list" :key="item.id">
        <Avatar class="imgs" :size="50" :url="item.avatar" />
        <div class="main">
          <div class="top">
            <div class="name">{{ item.nickname }}</div>
            <div class="date">{{ format(item.createDate, true) }}</div>
          </div>
          <div class="content">
            {{ item.content }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import format from "@/utils/format";
import Avatar from "@/components/Avatar";
export default {
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
  methods: {
    format,
  },
  components: { Avatar },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.data-list-container {
  h2 {
    font-size: 22px;
    margin: 30px 0;
  }
  li {
    border-bottom: 1px solid @gray;
    display: flex;
    padding: 20px 0;
    .imgs {
      flex: 0 0 auto;
      margin-right: 15px;
    }
    .main {
      flex: 1 1 auto;
      .top {
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
        .name {
          color: @success;
          font-size: 17px;
        }
        .date {
          color: @gray;
          font-size: 13px;
          padding-top: 5px;
          margin-right: 13px;
        }
      }
      .content {
        font-size: 14px;
      }
    }
  }
}
</style>
