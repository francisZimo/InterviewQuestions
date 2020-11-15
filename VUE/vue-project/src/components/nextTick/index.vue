<template>
<div style="border:1px solid red; width:200px">
    <h3>list 列表:nextTick</h3>
    <ul ref="listUl">
        <li v-for="(item,index) of list" :key="index">{{item}}</li>
    </ul>
    <button @click="addList"> 点击增加</button>
</div>

</template>

<script>
  export default {
    name: 'index',
    data(){
      return {
        list:[1,2,3]
      }
    },
    methods:{
      addList(){
        this.list.push(Date.now())
        this.list.push(Date.now())
        this.list.push(Date.now())
        // console.log(this.$refs.listUl.childNodes.length)
        this.$nextTick(()=>{
          console.log(this.$refs.listUl.childNodes.length)
        })
      }
    }
  }
</script>

<style scoped>

</style>