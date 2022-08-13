<template>
  <ul class="menu-container">
    <li v-for="(item, i) in list" :key="i">
      <RouterLink
        class="a"
        :to="{ name: item.name }"
        :exact="item.exact"
        active-class="selected"
        exact-active-class=""
      >
        <Icon :type="item.icon" />
        <span>{{ item.text }}</span>
      </RouterLink>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      list: [
        {
          name: "Home",
          text: "首页",
          icon: "home",
          exact: true,
        },
        {
          name: "Blog",
          text: "文章",
          icon: "blog",
          exact: false,
        },
        {
          name: "About",
          text: "关于我",
          icon: "about",
          exact: true,
        },
        {
          name: "Project",
          text: "项目&效果",
          icon: "code",
          exact: true,
        },
        {
          name: "Message",
          text: "留言板",
          icon: "chat",
          exact: true,
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.menu-container {
  margin: 16px 0 10px 0;
  li {
    cursor: pointer;
    font-size: 15px;
    color: @lightWords;
    height: 42px;
    line-height: 42px;
    letter-spacing: 2px;
    .icon-container {
      margin: 0 5px;
    }
    &:hover,
    a:hover {
      color: #fff;
    }
    .a {
      white-space: nowrap;
      padding: 0 40px;
      display: block;
      &.selected {
        background: #2f2f2f;
      }
    }
  }
}
</style>
