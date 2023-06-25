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
  <button @click="handleInput">输入文字</button>
</template>

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

  const cursorUrl = 'https://ossrs.net/wiki/images/figma-cursor.png';
  canvas.defaultCursor = `url(" ${cursorUrl} "), auto`;
  canvas.hoverCursor = `url(" ${cursorUrl} "), auto`;
  canvas.moveCursor = `url(" ${cursorUrl} "), auto`;
  // canvas.defaultCursor = `pointer`;
  // canvas.hoverCursor = `pointer`;
  // canvas.moveCursor = `pointer`;

  window.addEventListener('mousedown', function (e) {
    var objectsList = canvas.getObjects();
    var iTextsList = objectsList.filter(function (object) {
      return object instanceof fabric.IText;
    });
    iTextsList.forEach(function (iText) {
      iText.exitEditing();
    });
  });

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
  var obj = JSON.stringify(canvas.toObject());
  state.push(obj);
  console.log(obj, '===save');
  currentStep++;
}
function redo() {
  console.log('redo');
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
  3;
  canvas.isDrawingMode = isOpenDraw.value;
  canvas.freeDrawingCursor =
    'url("https://ossrs.net/wiki/images/figma-cursor.png"), auto';
  // setTimeout(() => {
  //   console.log('==cccc');
  //   // canvas.hoverCursor = 'pointer';
  //   const cursorUrl = 'https://ossrs.net/wiki/images/figma-cursor.png';
  //   canvas.defaultCursor = `url(" ${cursorUrl} "), auto`;
  //   canvas.hoverCursor = `url(" ${cursorUrl} "), auto`;
  //   canvas.moveCursor = `url(" ${cursorUrl} "), auto`;
  // }, 2000);
};

const handleInput = () => {
  const text = new fabric.IText('', {
    left: 100,
    top: 100,
    fontFamily: 'Comic Sans',
  });
  canvas.add(text);
  text.enterEditing();

  // text.onDeselect = () => {
  //   console.log('onDeselected');
  // };

  // // 画布处于失活状态监听
  // text.on('deselected', function (options) {
  //   console.log('deselected', options);
  //   // console.log(text.text);
  //   // canvas.remove(text);
  //   // canvas.add(text);
  //   // canvas.renderAll();
  // });

  // // 失活编辑状态监听
  // text.on('editing:exited', function (options) {
  //   console.log('editing:exited', options);
  // });

  // setTimeout(() => {
  //   text.exitEditing();
  // }, 10000);
};
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
