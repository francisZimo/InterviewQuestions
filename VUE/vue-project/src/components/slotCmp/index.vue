<template>
<div style="border: 1px solid red">
    <h3 >slot插槽---</h3>
    <slot-demo>

        <div>我是默认区域1</div>
        <div>我是默认区域2</div>
        <template v-slot:header>
            <h1>我是头部标题</h1>
        </template>
        <div>我是默认区域3</div>
        <template v-slot:footer>
            <h1>我是尾部标题</h1>
        </template>


        <template v-slot:default="slotProps">
            {{ slotProps.usertest.con }}
        </template>

    </slot-demo>
</div>

</template>

<script>
    import slotDemo from './slotDemo'
  export default {
    name: 'index',
    components:{
      slotDemo
    },
    data(){
        return{

        }
    }
  }
</script>

<style scoped>

</style>