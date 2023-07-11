<template>
  <div class="wrapper">
    <canvas
      width="500"
      height="500"
      id="c"
      style="border: 1px solid #ccc"
    ></canvas>
  </div>

  <button @click="handleUndo">undo</button>
  <button @click="handleRedo">redo</button>
  <button @click="handleDraw">画笔{{ isOpenDraw ? '开' : '关' }}</button>
  <button @click="handleInput">输入文字</button>
  <button @click="handleClip">裁剪排除背景图</button>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { fabric } from 'fabric';
import bg from './image.png';
import demo from './09.png';

const download = (fileStr: any, filename = `name${new Date().getTime()}`) => {
  const anchorEl = document.createElement('a');
  anchorEl.href = fileStr;
  anchorEl.download = filename;
  document.body.appendChild(anchorEl); // required for firefox
  anchorEl.click();
  anchorEl.remove();
};

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
var copyCanvas: any;
var currentStep = -1;
const isOpenDraw = ref(false);

function init() {
  copyCanvas = canvas = new fabric.Canvas('c', {
    isDrawingMode: isOpenDraw.value,
  }); // 这里传入的是canvas的id

  // canvas.rotate = Math.PI / 2;
  // canvas.rotate = 45;
  // canvas.requestRenderAll();
  console.log('init');

  const rect1 = new fabric.Rect({
    left: 100,
    top: 100,
    width: 100,
    height: 100,
    fill: 'red',
  });

  // 设置矩形动画
  rect1.animate('angle', '-50', {
    onChange: canvas.renderAll.bind(canvas), // 每次刷新的时候都会执行
  });

  canvas.add(rect1);

  // const bgUrl = 'http://img.daimg.com/uploads/allimg/210916/3-210916110348.jpg';

  canvas.setBackgroundImage(bg, canvas.renderAll.bind(canvas));
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
    // excludeFromExport: true,
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

function handleClip() {
  copyCanvas.backgroundImage.excludeFromExport = true;
  console.log(copyCanvas.toObject(), '===canvas222');
  console.log(copyCanvas, '===canvas', canvas.backgroundImage);
  console.log(copyCanvas.toDataURL, '===cccxx');

  var tempCanvas = new fabric.Canvas();
  // console.log(tempCanvas.width, '==??width');

  tempCanvas.loadFromJSON(copyCanvas.toJSON(), function () {
    console.log('加载完毕');
    // 为什么不是整个画布
    // 设置tempCanvas的宽高
    tempCanvas.width = copyCanvas.width;
    tempCanvas.height = copyCanvas.height;
    console.log(tempCanvas, '===sss');

    var pngDataUrl = tempCanvas.toDataURL({
      format: 'png',
      quality: 1,
    });

    // tempCanvas.width = copyCanvas.width;
    // tempCanvas.height = copyCanvas.height;

    // tempCanvas.loadFromJSON(copyCanvas.toJSON());
    // var pngDataUrl = tempCanvas.toDataURL({
    //   format: 'png',
    //   quality: 1,
    // });
    // tempCanvas.dispose();
    download(pngDataUrl);
    console.log(tempCanvas.toObject(), '===tempCanvasinner');
  });
  console.log(tempCanvas.toObject(), '===tempCanvasObj');
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
  // drawLine();
});

const drawLine = () => {
  // 创建波浪线路径对象
  var path = new fabric.Path('M 0 0');
  path.set({ left: 100, top: 100, fill: 'transparent', stroke: 'blue' });
  canvas.add(path);

  // 定义波浪的参数
  var amplitude = 20; // 波峰高度
  var frequency = 0.1; // 波浪频率
  var speed = 0.1; // 波浪速度
  var offset = 0; // 偏移量

  // 定义更新波浪线形状的函数
  function updateWave() {
    var points = [];
    for (var x = 0; x <= canvas.width; x++) {
      var y =
        canvas.height / 2 +
        Math.sin((x * frequency + offset) * speed) * amplitude;
      points.push({ x: x, y: y });
    }
    var pathData = fabric.util.createPath(fabric.util.makePathSimpler(points), [
      [fabric.Path.COMMAND_MOVE_TO, points[0].x, points[0].y],
    ]);
    path.set({ path: pathData });
    canvas.renderAll();
    offset += 0.1;
  }
  updateWave();

  // 每100毫秒更新一次波浪线形状
  // setInterval(updateWave, 100);
};
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
<style>
body {
  /* background-color: black; */
}
.wrapper {
  width: 300px;
  height: 300px;
  overflow: auto;
}
</style>
