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
// import { fabric } from 'fabric';
// import Pressure from 'pressure';
// import { PSBrush } from '@arch-inc/fabricjs-psbrush';
let currentPressure = 0;

onMounted(() => {
  const canvas = new fabric.Canvas('ccbox', {
    isDrawingMode: true,
    // enablePointerEvents: true,
  }); // 这里传入的是canvas的id

  // 设置画笔颜色
  canvas.freeDrawingBrush.color = '#11999e';
  // Pressure.set('.upper-canvas', {
  //   change: function (force, event) {
  //     console.log(force, '===force');
  //     if (canvas.isDrawingMode) {
  //       var pressure = force || 0.1; // 如果设备不支持压感，则使用默认值
  //       var lineWidth = pressure * 5; // 根据需要调整线条宽度

  //       canvas.freeDrawingBrush.width = lineWidth;
  //       canvas.freeDrawingBrush.color = pressure > 0.5 ? 'red' : 'blue';
  //     }
  //   },
  // });
});
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
