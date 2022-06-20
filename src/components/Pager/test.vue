<template>
  <div>
    <Pager
      @pageChange="current = $event"
      :current="current"
      :total="500"
      :limit="10"
      :visibleNumber="10"
    />
    <Pager
      @pageChange="current1 = $event"
      :current="current1"
      :total="500"
      :limit="10"
      :visibleNumber="30"
    />
  </div>
</template>

<script>
import Pager from "./";
export default {
  components: {
    Pager,
  },
  data() {
    return {
      current: 20,
      current1: 30,
    };
  },
};
</script>

<style></style>
