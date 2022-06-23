<template>
  <div class="contact-container">
    <a>
      <Icon type="github" />
      <span>Jack</span>
    </a>
    <a href="mailto:liweijie9988@163.com">
      <Icon type="mail" />
      <span>liweijie9988@163.com</span>
    </a>
    <a>
      <div class="pop">
        <img src="@/assets/Contact/weixin.jpg" alt="" />
      </div>
      <Icon type="weixin" class="weixin" />
      <span>16620026028</span>
    </a>
    <a
      href="tencent://message/?Menu=yes&uin=1146957654&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45"
    >
      <div class="pop">
        <img src="@/assets/Contact/qq.jpg" alt="" />
      </div>
      <Icon type="qq" />
      <span>1146957654</span>
    </a>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
};
</script>

<style lang="less" scoped>
.contact-container {
  background: transparent;
  width: 100%;
}
a {
  position: relative;
  display: block;
  color: @lightWords;
  padding: 8px 0 8px 25px;
  width: 100%;
  cursor: pointer;
  font-size: 14px;
  .icon-container {
    font-size: 22px;
    vertical-align: -3px;
    margin-right: 5px;
    &.weixin {
      font-size: 28px;
      margin-left: -2px;
    }
  }
  .pop {
    content: "";
    width: 170px;
    height: 170px;
    border-radius: 8px;
    background: #fff;
    position: absolute;
    left: 50%;
    bottom: 40px;
    padding: 5px;
    transform: scaleY(0);
    transform-origin: center bottom;
    transition: 0.2s;
    box-shadow: 0 0 10px 5px #1e3a60;
    img {
      width: 100%;
      height: 100%;
    }
    &::before {
      content: "";
      width: 10px;
      height: 10px;
      background: #fff;
      position: absolute;
      transform: rotate(45deg) translateX(-50%);
      left: 50%;
      bottom: -7px;
      z-index: -1;
    }
  }
  &:hover .pop {
    transform: scaleY(1) translateX(-50%);
  }
}
@import "~@/styles/var.less";
</style>
