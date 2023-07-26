<template>
  <div class="wrapper">
    <canvas
      width="800"
      height="800"
      id="ccbox"
      style="border: 1px solid red"
    ></canvas>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { fabric } from 'fabric';
import { PSBrush } from '@arch-inc/fabricjs-psbrush';

onMounted(() => {
  console.log('https://www.cnblogs.com/fangsmile/p/14324460.html');
  console.log(
    'https://l2j2c3.gitee.io/smooth-signature/demo/index.html',
    'https://codesandbox.io/s/experiment-with-undo-psbrush-e884yk?file=/src/index.js:641-696'
  );
  console.log(
    'https://codesandbox.io/s/experiment-with-undo-psbrush-e884yk?file=/src/index.js:641-696'
  );
  const canvas = new fabric.Canvas('ccbox', {
    isDrawingMode: true,
    // enablePointerEvents: true,
  }); // 这里传入的是canvas的id

  // 设置画笔颜色
  // canvas.freeDrawingBrush.color = '#11999e';
  console.log('start');
  // Initialize a brush

  let brush = new PSBrush(canvas);
  brush.width = 20;
  brush.color = 'red';
  canvas.freeDrawingBrush = brush;
  // canvas.isDrawingMode = true;
  // canvas.freeDrawingBrush.width = 10;

  console.log('ccc zhi');
  // Set some options...
  // brush.width = 10;
  // brush.color = '#000';
  // brush.disableTouch = true; // disable touch and only use mouse and pen devices
  // brush.pressureManager.fallback = 0.3; // fallback value for mouse and touch events
});
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
