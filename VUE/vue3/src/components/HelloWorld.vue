<template>
  <div class="hello">
    <h1>宽：{{width}}</h1>
    <h2>高：{{height}}</h2>
    <h2>age:{{age}}</h2>
    <!-- <h1>{{ msg }}</h1> -->
    <!-- <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul> -->
  </div>
</template>

<script setup>
import {ref} from 'vue'
// import {} from ''
import { useWindowResize } from '@smart-mini-cli/use'
// import {useWindowResize} from './useTest'
// export default {
//   name: 'HelloWorld',
//   props: {
//     msg: String
//   },
//   data:{

//   }
// }

// const w=ref(1)
// const h=ref(1)
// console.log(useWindowResize,'==ss')
const {width,height}=useWindowResize()
// setInterval(()=>{
//   console.log(width,'=xxxw222')
// },2000)
console.log(width,'==value')
function test(){
  const age=ref('tony')
  setTimeout(()=>{
    age.value='xxx'
  },3000)
  return {
    age
  }
}
const {age} = test()
console.log(age,'==age')

// w.value=width
// h.value=height
// onMounted(()=>{
//   const {width,height}=useWindowResize()
// w.value=width
// h.value=height
// })



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
