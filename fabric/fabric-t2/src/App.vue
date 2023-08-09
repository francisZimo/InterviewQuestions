<template>
  <canvas id="drawBox" class="drawBox" style="border: 1px solid red"></canvas>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const compressUrl = ref('');
let lastTime = 0;
let lastSpeed = 0;
const sensitivity = 0.01;
const maxPressure = 1; // 最大压感值，你可以根据需要调整
const pressureHistoryLength = 5; // 压力历史记录长度，你可以根据需要调整
let pressureHistory = Array(pressureHistoryLength).fill(0);

var path = null;
var pressurePath = []; // 存储路径点和对应压力值的数组

const pressBox = ref(null);

function getPressure(speed) {
  console.log(speed, '===speed');
  return Math.max(1 / (speed + 1), 0.001);
}

const download = (fileStr: any, filename = `name${new Date().getTime()}`) => {
  const anchorEl = document.createElement('a');
  anchorEl.href = fileStr;
  anchorEl.download = filename;
  document.body.appendChild(anchorEl); // required for firefox
  anchorEl.click();
  anchorEl.remove();
};

var state = [];
var mods = 0;
var canvas: any;
var copyCanvas: any;
var currentStep = -1;
const isOpenDraw = ref(false);
var currentPath = null;
var lastPoint = null;

var curBrush = null;

// 需要在页面容器加载完才能开始初始化（页面加载完才找到 canvas 元素）
// onMounted 是 Vue3 提供的一个页面生命周期函数：实例被挂载后调用。
// onMounted 官方文档说明：https://v3.cn.vuejs.org/guide/composition-api-lifecycle-hooks.html
onMounted(() => {
  // setInterval(() => {
  //   Board.setCurIndex(Board.curIndex.value + 1);
  // }, 3000);
  console.log('https://gs.archinc.jp/#drawing=5e4fa91448c4290030d09661');
  console.log('https://arch-inc.github.io/fabricjs-psbrush/');
  console.log('https://www.cnblogs.com/fangsmile/p/14324460.html');
  console.log(
    'https://l2j2c3.gitee.io/smooth-signature/demo/index.html',
    'https://codesandbox.io/s/experiment-with-undo-psbrush-e884yk?file=/src/index.js:641-696'
  );
  console.log('https://codesandbox.io/s/experiment-with-undo-psbrush-e884yk?file=/src/index.js:641-696');
  init(); // 执行初始化函数
  // drawLine();
});

function pressurePen() {
  const canvas = document.body;

  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;
  let penPressure = 0;

  canvas.addEventListener('mousedown', startDrawing);
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', stopDrawing);
  canvas.addEventListener('mouseout', stopDrawing);

  function startDrawing(e) {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
    lastTime = Date.now();
  }

  function draw(e) {
    if (!isDrawing) return;

    const currentTime = Date.now();
    const deltaTime = currentTime - lastTime;

    // console.log(deltaTime, '==时间差');
    lastTime = currentTime;

    const currentX = e.offsetX;
    const currentY = e.offsetY;

    // 计算移动距离
    const dx = currentX - lastX;
    const dy = currentY - lastY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // 计算速度
    const speed = distance / deltaTime;
    // console.log(speed, '==速度');
    // 计算速度的变化率，用于模拟压感
    // const speedChangeRate = (speed - lastSpeed) / deltaTime;
    // console.log(speedChangeRate, '==速度变化率');
    // 根据速度和速度变化率计算压感
    // penPressure = Math.min(
    //   speed * sensitivity + Math.abs(speedChangeRate),
    //   maxPressure
    // );

    // function easeOutExpo(t) {
    //   return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    // }
    // console.log(speed, '===速率');
    let penPressure = getPressure(speed);
    // 更新压力历史
    pressureHistory.push(penPressure);
    pressureHistory.shift();
    // console.log(pressureHistory, '===pressureHistory');
    // 计算平均压力
    const averagePressure = pressureHistory.reduce((sum, val) => sum + val) / pressureHistoryLength;
    console.log(penPressure, '===penPressure2', averagePressure);
    [lastX, lastY] = [currentX, currentY];
    lastSpeed = speed;
  }

  function stopDrawing() {
    isDrawing = false;
    penPressure = 0;
    pressureHistory = Array(pressureHistoryLength).fill(0);
  }
}

function init() {
  copyCanvas = canvas = new fabric.Canvas('drawBox', {
    isDrawingMode: true,
    enablePointerEvents: true,
    width: 800, // 宽 100px
    height: 500 // 高 60px
  }); // 这里传入的是canvas的id

  let brush = new fabric.PSBrush(canvas);

  brush.width = 5;
  brush.color = 'red';
  console.log('init');
  canvas.freeDrawingBrush = brush;
  // pressurePen();
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
