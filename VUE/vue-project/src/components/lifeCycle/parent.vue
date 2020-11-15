<template>
    <div style="border:1px solid blue">
        <h3>生命周期，挂载，更新，与销毁</h3>
        <h3>父组件</h3>
        <child :title="name" @changeData="getParams"></child>
        <button @click="updateCmp">更新父组件</button>
    </div>

</template>

<script>
    import child from './child'
  export default {
    name: 'parent',
    data(){
      return{
        name:'francis'
      }
    },
    components: {child},
    methods:{
      updateCmp(){
        this.name='传递给父组件的值'
      },
      getParams(payload){
        this.name=payload
      }
    },
    beforeCreate () {
      console.log('父组件 beforeCreate')
    },
    created () {
      console.log('父组件 created')
    },
    beforeMount () {
      console.log(' 父组件 beforeMount')
    },
    mounted () {
      console.log('父组件 mounted')
    },
    beforeUpdate(){
      console.log('父组件 beforeUpdate')
    },
    updated () {
      console.log('父组件 update')
    },
    beforeDestroy () {
      console.log('父组件 beforeDestroy')
    },
    destroyed () {
      console.log('父组件 destroyed')
    }
  }
</script>

<style scoped>

</style>