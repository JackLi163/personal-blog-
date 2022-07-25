<template>
  <div class="project-container">
    <ul class="ul-container" ref="container" v-loading="isloading">
      <li class="item" v-for="item in data" :key="item.id">
        <a
          class="imgs"
          :href="item.url ? item.url : `javascript:alert('该项目无法通过外网访问')`"
          v-if="item.thumb"
        >
          <img v-lazy="item.thumb" alt="" />
        </a>
        <div class="main">
          <h2 class="title">
            <a :href="item.url ? item.url : `javascript:alert('该项目无法通过外网访问')`">{{
              item.name
            }}</a>
          </h2>
          <a class="github" :href="item.github" v-if="item.github">github</a>
          <div class="content">
            <p v-for="(p, i) in item.description" :key="i">{{ p }}</p>
          </div>
        </div>
      </li>
    </ul>
    <Empty v-if="data.length === 0 && !isloading" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import mainScroll from "@/mixins/mainScroll";
import Empty from "@/components/Empty";
export default {
  mixins: [mainScroll("container")],
  created() {
    this.$store.dispatch("project/fetchProject");
  },
  computed: mapState("project", ["data", "isloading"]),
  components: { Empty },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.project-container {
  height: 100%;
  .ul-container {
    height: 100%;
    width: 100%;
    padding: 20px;
    overflow-y: auto;
    position: relative;
    scroll-behavior: smooth;

    .item {
      display: flex;
      padding: 20px;
      transition: 0.5s;
      margin: 20px 0;
      &:hover {
        transform: scale(1.01) translate(3px, -3px);
        box-shadow: -1px 1px 5px #000;
      }

      .imgs {
        display: block;
        flex: 0 0 auto;
        margin-right: 15px;
        img {
          width: 250px;
          min-height: 150px;
          border-radius: 5px;
          display: block;
        }
      }
      .main {
        .title {
          margin: 5px 0;
        }
        .github {
          color: @primary;
          font-size: 14px;
        }
        .content {
          margin-top: 15px;
          p {
            margin-bottom: 15px;
          }
        }
      }
    }
  }
}
</style>
