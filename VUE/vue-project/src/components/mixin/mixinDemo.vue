<template>
    <div style="border:1px solid blue">
        <h3>{{name}},现在居住在{{city}}</h3>
        <button @click="showName">点击获取更多信息</button>
    </div>
</template>

<script>
    import  mixin from './mixin'
  export default {
    name: 'mixinDemo',
    mixins:[mixin],
    data(){
      return {
        name:'我是北京人'
      }
    },
    mounted () {
      console.log('mounted 父组件：',this.city)
    }
  }
</script>

<style scoped>

</style>