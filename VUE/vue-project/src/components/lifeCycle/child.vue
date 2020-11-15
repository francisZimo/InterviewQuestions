<template>
    <div style="border:1px solid red">
        <h3>子组件</h3>
        <h3>title:{{title}}</h3>
        <button @click="change">子组件传参改变父组件</button>
    </div>

</template>

<script>
  export default {
    name: 'child',
    props:['title'],
    data(){return{
      city:'北京'
    }},
    methods:{
      change(){
        this.$emit('changeData','传给父组件参数')
      }
    },
    beforeCreate () {
      console.log('子组件 beforeCreate')
    },
    created () {
      console.log('子组件 created')
    },
    beforeMount () {
      console.log(' 子组件 beforeMount')
    },
    mounted () {
      console.log('子组件 mounted')
    },
    beforeUpdate(){
      console.log('子组件 beforeUpdate')
    },
    updated () {
      console.log('子组件 update')
    },
    beforeDestroy () {
      console.log('子组件 beforeDestroy')
    },
    destroyed () {
      console.log('子组件 destroyed')
    }
  }

</script>

<style scoped>

</style>