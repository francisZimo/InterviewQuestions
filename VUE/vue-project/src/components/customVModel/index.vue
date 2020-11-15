<template>
    <div style="border:2px solid red">
        <h3>自定义组件name:{{name}}</h3>
        <custom-model v-model="name"></custom-model>
    </div>

</template>

<script>
    import CustomModel from './CustomModel'
  export default {
    name: 'index',
    components:{
      CustomModel
    },
    data(){
      return {
        name:'init'
      }
    }
  }
</script>

<style scoped>

</style>