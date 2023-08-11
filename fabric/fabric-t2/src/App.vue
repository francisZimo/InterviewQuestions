<template>
  <canvas id="drawBox" class="drawBox" style="border: 1px solid red"></canvas>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

var canvas: any;

// 需要在页面容器加载完才能开始初始化（页面加载完才找到 canvas 元素）
// onMounted 是 Vue3 提供的一个页面生命周期函数：实例被挂载后调用。
// onMounted 官方文档说明：https://v3.cn.vuejs.org/guide/composition-api-lifecycle-hooks.html
onMounted(() => {
  init(); // 执行初始化函数
});

function init() {
  canvas = new fabric.Canvas('drawBox', {
    isDrawingMode: true,
    enablePointerEvents: true,
    width: 800, // 宽 100px
    height: 500 // 高 60px
  }); // 这里传入的是canvas的id

  let brush = new fabric.PSBrush(canvas);

  brush.width = 20;
  brush.color = 'red';
  console.log('init');
  canvas.freeDrawingBrush = brush;
}
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
<style>
html,
body,
#app {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: black; */
}

.wrapper {
  width: 300px;
  height: 300px;
  overflow: auto;
  margin-top: 30px;
}
</style>
