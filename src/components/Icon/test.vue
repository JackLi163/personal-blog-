<template>
<div class="test-container">
    <div class="Icon-container" v-for="item in types" :key="item">
        <Icon :type="item"/>
        <label >{{item}}</label>
    </div>
</div>
</template>

<script>
import Icon,{types} from './';
export default {
    components: {
        Icon
    },
    data() {
        return {
             types
        }
    },
}
</script>

<style lang="less" scoped>
    .test-container{
        display: grid;
        grid-template-columns: repeat(5,1fr);
        .Icon-container{
            font-size: 20px;
        }
    }
</style>