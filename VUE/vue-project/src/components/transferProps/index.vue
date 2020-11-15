<template>
    <div class="con">
        <h3>我是父组件</h3>
        <h4>自组件的问候:{{childMsg}}</h4>
        <cmp-a :title="title" @kiss="kiss"></cmp-a>
        <cmp-b></cmp-b>
    </div>

</template>

<script>
    import cmpA from './cmpA'
    import cmpB from './cmpB'
  export default {
    name: 'index',
    components:{
      cmpA,cmpB
    },
    data(){
      return{
        title:'给娃子的特大礼包',
        childMsg:''
      }
    },
    methods:{
      kiss(payload){
        this.childMsg=payload
      }
    }
  }
</script>

<style scoped>
.con{
    width:300px;
    border:1px solid red
}
</style>