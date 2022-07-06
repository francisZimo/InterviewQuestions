<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>{{width}}</h1>
  <!-- <h2>info:{{info}}</h2> -->
  <!-- <h3>{{x}}，{{y}}</h3> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

</template>

<script>
import {defineComponent,ref} from 'vue'
// import HelloWorld from './components/HelloWorld.vue'
// import {useWindowSize1 } from '@smart-mini-cli/use'
import { useWindowSize } from '@vueuse/core'
// import {useWindowResize} from '@smart-mini-cli/use'
// import {useWindowResize} from './components/useTest'
// export default {
//   name: 'App',
//   components: {
//     HelloWorld
//   },
//   data() {
//     return {
//       info:'测试数组'
//     }
//   },
//   onMounted(){
//       const {width}=useWindowResize()
//       this.info=width
//   }

// }

export default defineComponent({
  name: 'App',
  // components: {
  //   HelloWorld
  // },
  setup(){
      // debugger
      // const info=ref(123)
  
      const {width}=useWindowSize()
      console.log(width,'==width')
      // console.log(info,'===info')
      // const {width}=useWindowSize()
     
      // console.log(width,'==width')


      // setTimeout(()=>{
      //   // width.value=1000
      //   info.value='haha'
      //   console.log(info,'==info1')
      //   // console.log(width,'==width',info)
      // },3000)
    //  const { x, y } = useMouse()
      // setInterval(()=>{
        
      //   // console.log(x,y)
      //   // info.value=width.value
      //   console.log(width,'xxwidth') 
      // },2000)
      
     
      return{
        // info,
        // x,y,
        width,
        // info
      }
  },
  mounted() {
    // console.log('我哈哈哈')
    // const {width,height}=useWindowResize()
    // console.log(width,height)
    
    // this.test()
  },
  methods:{
    test(){
      const test=ref(0)
      console.log(test,'==test')
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
