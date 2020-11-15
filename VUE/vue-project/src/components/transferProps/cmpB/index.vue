
<template>
    <div  style="border:1px solid black">
        <p>组件B</p>
        <h3>{{txt}}</h3>

    </div>

</template>

<script>
  import bus from '../bus'
  export default {
    name: 'index',
    data:function(){
      return {
        txt:'初始化'
      }
    },
    created(){
      this.event1()
    },
    methods:{
      event1(){
        bus.$on('customerFn',(payload)=>{
          this.txt=payload
        })
      }
    }
  }
</script>

<style scoped>

</style>