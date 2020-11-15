<template>
    <input type="text" :value="name1" @input="inputChange">

</template>

<script>
  export default {
    model:{
      prop:'name1',
      event:'changeName'
    },
    props:{
     name1:String
    },
    methods:{
      inputChange(e){
        this.$emit('changeName',e.target.value)
      }
    }

  }
</script>

<style scoped>

</style>