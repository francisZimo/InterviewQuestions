<script setup lang="ts">
import { onMounted } from 'vue';
import { fabric } from 'fabric';

function init() {
  const canvas = new fabric.Canvas('c'); // 这里传入的是canvas的id
  // const c1=new fabric.
  // 创建一个长方形
  const rect = new fabric.Rect({
    top: 30, // 距离容器顶部 30px
    left: 30, // 距离容器左侧 30px
    width: 100, // 宽 100px
    height: 60, // 高 60px
    fill: 'red', // 填充 红色
  });

  // 在canvas画布中加入矩形（rect）。add是“添加”的意思
  canvas.add(rect);
  // 创建波浪线路径
  var path = 'M0,150 Q30,200 70,150 T150,150';
  var wave = new fabric.Path(path, {
    stroke: 'blue',
    strokeWidth: 3,
    fill: '',
  });

  // window.fabric.canvas.add(wave);
  canvas.add(wave);
  wave.set({ top: 50, left: 50 }).setCoords();

  // 创建动画效果
  var angle = 0;
  function animate() {
    // 计算波浪线顶点位置
    var points = wave.path;
    for (var i = 1; i < points.length - 1; i += 2) {
      points[i].y = 150 + Math.sin(angle + ((i - 1) / 2) * 0.2) * 25;
    }
    wave.path = points;
    wave.setCoords();

    // 更新角度值
    angle += 0.05;

    // 重绘canvas
    canvas.renderAll();

    // 启动下一帧动画
    requestAnimationFrame(animate);
  }
  animate();
}

// 需要在页面容器加载完才能开始初始化（页面加载完才找到 canvas 元素）
// onMounted 是 Vue3 提供的一个页面生命周期函数：实例被挂载后调用。
// onMounted 官方文档说明：https://v3.cn.vuejs.org/guide/composition-api-lifecycle-hooks.html
onMounted(() => {
  init(); // 执行初始化函数
});
</script>

<template>
  <canvas
    width="400"
    height="400"
    id="c"
    style="border: 1px solid #ccc"
  ></canvas>
</template>

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
