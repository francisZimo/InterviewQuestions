<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { fabric } from 'fabric';

// const CanvasHistory = fabric.CanvasHistory;

// const rect = new fabric.Rect({
//   top: 30, // 距离容器顶部 30px
//   left: 30, // 距离容器左侧 30px
//   width: 100, // 宽 100px
//   height: 60, // 高 60px
//   fill: 'red', // 填充 红色
// });

// // 在canvas画布中加入矩形（rect）。add是“添加”的意思
// canvas.add(rect);
var state = [];
var mods = 0;
var canvas: any;
var currentStep = -1;
const isOpenDraw = ref(false);

function init() {
  canvas = new fabric.Canvas('c', {
    isDrawingMode: isOpenDraw.value,
  }); // 这里传入的是canvas的id
  // 设置画笔颜色
  canvas.freeDrawingBrush.color = '#11999e';
  // 设置画笔粗细
  canvas.freeDrawingBrush.width = 10;
  canvas.on(
    'object:modified',
    function () {
      console.log('modified');
      updateModifications(true);
    },
    'object:added',
    function () {
      console.log('added');
      updateModifications(true);
    }
  );
  // 引入CanvasHistory类并创建history对象
  // const c1=new fabric.

  // 创建波浪线路径
  // 给canvas添加监听器

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
  updateModifications(true);
}
function updateModifications(savehistory: boolean) {
  // if (savehistory === true) {
  //   const myjson = JSON.stringify(canvas);
  //   state.push(myjson);
  //   console.log(state, '==save', mods);
  // }
  var obj = JSON.stringify(canvas.toObject());
  state.push(obj);
  console.log(obj, '===save');
  currentStep++;
}
function redo() {
  console.log('redo');
  // if (mods > 0) {
  //   canvas.clear().renderAll();
  //   canvas.loadFromJSON(state[state.length - 1 - mods + 1]);
  //   canvas.renderAll();
  //   //console.log("geladen " + (state.length-1-mods+1));
  //   mods -= 1;
  //   console.log('state ' + state.length);
  //   console.log('mods ' + mods);
  // }
  if (currentStep < state.length - 1) {
    currentStep++;
    console.log(state, '===redo', currentStep);
    canvas.loadFromJSON(state[currentStep], function () {
      canvas.renderAll();
    });
  }
}
function undo() {
  console.log('undo');
  // if (mods < state.length) {
  //   canvas.clear().renderAll();
  //   canvas.loadFromJSON(state[state.length - 1 - mods - 1]);
  //   canvas.renderAll();
  //   console.log('geladen ' + (state.length - 1 - mods - 1));
  //   console.log('state ' + state.length);
  //   mods += 1;
  //   console.log('mods ' + mods);
  // }
  if (currentStep > 0) {
    currentStep--;
    console.log(state, '===undo', currentStep);
    canvas.loadFromJSON(state[currentStep], function () {
      canvas.renderAll();
    });
  }
}

// 需要在页面容器加载完才能开始初始化（页面加载完才找到 canvas 元素）
// onMounted 是 Vue3 提供的一个页面生命周期函数：实例被挂载后调用。
// onMounted 官方文档说明：https://v3.cn.vuejs.org/guide/composition-api-lifecycle-hooks.html
onMounted(() => {
  init(); // 执行初始化函数
});

const handleRedo = () => {
  redo();
};
const handleUndo = () => {
  undo();
};

const handleDraw = () => {
  isOpenDraw.value = !isOpenDraw.value;
  canvas.isDrawingMode = isOpenDraw.value;
};
</script>

<template>
  <canvas
    width="400"
    height="400"
    id="c"
    style="border: 1px solid #ccc"
  ></canvas>
  <button @click="handleUndo">undo</button>
  <button @click="handleRedo">redo</button>
  <button @click="handleDraw">画笔{{ isOpenDraw ? '开' : '关' }}</button>
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
