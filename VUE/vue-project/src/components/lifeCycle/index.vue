<template>
<div>
    <h3>最外层</h3>
    <button @click="ifDestory=false">销毁父组件</button>
    <parent v-if="ifDestory"></parent>

</div>

</template>

<script>
    import parent from './parent'
  export default {
    name: 'index',
    data(){
      return {
        ifDestory:true
      }
    },
    components:{
      parent
    }
  }
</script>

<style scoped>

</style>