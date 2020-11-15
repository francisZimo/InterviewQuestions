<template>
    <div style="border:1px solid black">
        <p>组件A</p>
        <h3>{{title}}</h3>
        <button @click="gift">圣诞节礼物</button>
        <button @click="event1">我是组件A</button>
    </div>

</template>

<script>
    import bus from '../bus'
  export default {
    name: 'index',
    props:['title'],
    data:function(){
      return {

      }
    },
    methods:{
      event1(){
        bus.$emit('customerFn','组件A')
      },
      gift(){
        this.$emit('kiss','我是组件A，圣诞快乐，么么哒')
      }
    }
  }
</script>

<style scoped>

</style>