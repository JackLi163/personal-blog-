<template>
  <div>
    <h1>根组件</h1>
    <Avatar
      url="https://ts1.cn.mm.bing.net/th/id/R-C.928ef8908b5eb3666b2a27a1f6cfbe17?rik=h2FXLv1HNaxbTg&riu=http%3a%2f%2fp0.so.qhmsg.com%2ft018b5eb3666b2a27a1.jpg&ehk=QnGPPvZKq3cPW6%2bdkG%2b3zIRvAGXRsgYVTirfbvOBTaU%3d&risl=&pid=ImgRaw&r=0"
      :style="{
        size: '100',
      }"
    />
  </div>
</template>

<script>
import Avatar from "./";
export default {
  components: {
    Avatar,
  },
};
</script>
