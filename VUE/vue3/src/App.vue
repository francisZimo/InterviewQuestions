<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>{{ width }}</h1>
  <!-- <h2>info:{{info}}</h2> -->
  <!-- <h3>{{x}}，{{y}}</h3> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useWindowSize } from '@vueuse/core';

export default defineComponent({
  name: 'App',
  // components: {
  //   HelloWorld
  // },
  setup() {
    // debugger
    // const info=ref(123)

    const { width } = useWindowSize();
    console.log(width, '==width');
    return {
      // info,
      // x,y,
      width,
      // info
    };
  },
  mounted() {
    function add(a, b) {
      let c = 10;
      return a + b + c;
    }

    const result = add(1, 2);
    const s = 10;
    console.log('result: ', result);
  },
  methods: {
    test() {
      const test = ref(0);
      console.log(test, '==test');
    },

    execFn() {
      function addConcole(target, ...arg) {
        console.log('target', target);
        console.log('arg', arg);
        // 拓展原型方法
        target.prototype.log = function (msg) {
          console.log(`[${new Date()} ${msg}`);
        };
        // 拓展静态属性
        target.myName = '一个类';
        return target;
      }

      // function Get(path) {
      //   console.log(path, '==path')
      //   return function (target, key, descriptor) {
      //     console.log({
      //       target,
      //       key,
      //       descriptor
      //     })
      //   }
      // }

      function Get(routePath) {
        return function (target, key, descriptor) {
          const originalMethod = descriptor.value; // 保存原始方法
          console.log(target, key, '===target', routePath);
          console.log(descriptor.value, '===descriptor', originalMethod);
          descriptor.value = function () {
            // 在原始方法执行前加入逻辑
            console.log('处理 Get 请求，路由路径: ' + routePath);

            // 执行原始方法
            const result = originalMethod.apply(this, arguments);

            // 在原始方法执行后加入逻辑
            console.log('Get 请求处理完成');

            return result;
          };

          return descriptor;
        };
      }

      @addConcole
      class MyClass {
        constructor() {}
        @Get('/doc')
        findA(res) {
          console.log(res, '==res');
        }
      }

      const myObj = new MyClass();
      myObj.log('林三心');
      // [Sat Jul 08 2023 17:31:55 GMT+0800 (中国标准时间) 林三心
      console.log(MyClass.myName, '==name');
      // myObj.findA('123')
    },
  },
});
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
