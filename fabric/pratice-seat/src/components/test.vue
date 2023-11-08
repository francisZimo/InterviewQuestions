<template>
  <div>我是测试组件:{{ Board.curIndex }}</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Board from '../global';

// const curIndex = ref(1);

onMounted(() => {
  //   const proxyDemo = new Proxy(Board, {
  //     get: function (target, key) {
  //       console.log('===board get', target, key);
  //       //   console.log('get', key);
  //       //   return target[key];
  //     },
  //     set: function (target, key, value, receiver) {
  //       console.log('===board set', target, key, value);
  //       curIndex.value = value;
  //       return Reflect.set(target, key, value, receiver);
  //     },
  //   });
  //   proxyDemo.curIndex = 100;
  //   console.log(proxyDemo.curIndex, '==haha');
});
</script>

<style lang="scss" scoped></style>
