<template>
  <div class="blog-list-container" v-loading="isloading" ref="container">
    <ul :style="{ opacity: isloading ? 0 : 1 }">
      <li v-for="item in data.rows" :key="item.id">
        <routerLink
          :to="{
            name: 'BlogDetail',
            params: {
              id: item.id,
            },
          }"
          class="thumb"
          ><img v-lazy="item.thumb"
        /></routerLink>
        <div class="main">
          <routerLink
            :to="{
              name: 'BlogDetail',
              params: {
                id: item.id,
              },
            }"
          >
            <h2 class="title">
              {{ item.title }}
            </h2>
          </routerLink>
          <div class="aside">
            <span class="date">日期：{{ format(item.createDate) }}</span>
            <span class="scanNumber">浏览：{{ item.scanNumber }}</span>
            <span class="commentNumber">评论：{{ item.commentNumber }}</span>
            <RouterLink
              :to="{
                name: 'CategoryBlog',
                params: {
                  catagorId: +item.category.id,
                },
              }"
              class="category"
              >分类：{{ item.category.name }}</RouterLink
            >
          </div>
          <div class="content">
            {{ item.description }}
          </div>
        </div>
      </li>
    </ul>
    <Empty v-if="data.rows.length === 0 && !isloading" />
    <Pager
      :current="routeInfo.page"
      :total="data.total"
      :limit="routeInfo.limit"
      @pageChange="handlePageChange"
    />
  </div>
</template>

<script>
import mixin from "@/mixins/fetchData";
import mainScroll from "@/mixins/mainScroll";
import * as blog from "@/api/blog";
import { format } from "@/utils";
import Pager from "@/components/Pager";
import Empty from "@/components/Empty";
export default {
  mixins: [mixin({ total: 0, rows: [] }), mainScroll("container")],
  components: {
    Pager,
    Empty,
  },
  methods: {
    format,
    async fetchData() {
      return await blog.getBlogs();
    },
    handlePageChange(newPage) {
      const query = {
        limit: this.routeInfo.limit,
        page: newPage,
      };
      // 如果有分类的话将分类id重置为指定值
      if (this.routeInfo.catagorId === -1) {
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        this.$router.push({
          name: "CategoryBlog",
          query,
          params: { catagorId: this.routeInfo.catagorId },
        });
      }
    },
  },
  computed: {
    routeInfo() {
      // 通过路由获取页码，页容量，分类id
      const page = +this.$route.query.page || 1;
      const limit = +this.$route.query.limit || 10;
      const catagorId = +this.$route.params.catagorId || -1;
      return { page, limit, catagorId };
    },
  },
  watch: {
    async $route() {
      // 显示loading图标
      this.isloading = true;
      // 路由数据发送变化时候滚动条滚动最上面
      this.$refs.container.scrollTop = 0;
      // 请求数据
      this.data = await this.fetchData();
      this.isloading = false;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.blog-list-container {
  padding: 20px;
  position: relative;
  line-height: 1.8;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  scroll-behavior: smooth;
  ul {
    transition: 0.5s;
    li {
      display: flex;
      padding: 15px 0;
      .thumb {
        margin-right: 15px;

        img {
          display: block;
          max-width: 200px;
          border-radius: 5px;
          object-fit: cover;
          min-height: 120px;
        }
      }
      border-bottom: 1px solid @gray;
      .main {
        .aside {
          color: @gray;
          font-size: 10px;
          span {
            margin-right: 20px;
          }
        }
        .content {
          font-size: 14px;
          margin: 12px 0;
        }
      }
    }
  }
}
</style>
