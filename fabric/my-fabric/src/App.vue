<template>
  <!-- <div class="pressure-area" id="pressBox" ref="pressBox"></div> -->
  <!-- <div class="wrapper"> -->
  <!-- <Test></Test>
  <img :src="imgUrl" alt="" />
  {{ Board.curIndex }} -->
  <img :src="imgUrl" alt="" />
  <!-- <canvas id="drawBox" style="border: 1px solid red"></canvas> -->
  <!-- </div> -->

  <!-- <img :src="compressUrl" />
  <button @click="handleUndo">undo</button>
  <button @click="handleRedo">redo</button>
  <button @click="handleDraw">画笔{{ isOpenDraw ? '开' : '关' }}</button>
  <button @click="handleInput">输入文字</button>
  <button @click="handleClip">裁剪排除背景图</button>
  <button @click="finishCorrect">结束批改</button> -->

  <!-- <PsBrush></PsBrush> -->
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Compressor from 'compressorjs';
// import { mockData as binaryData } from './hex.js';
import { mockData1 as binaryData } from './hex1.js';
// import Test from './components/test.vue';
// import Board from './global';
// import { PSBrush } from '../lib/index';
// import { PSBrush } from '../lib2/index';
// import Pressure from 'pressure';
// import pressureGlobal from '../lib/pressureCapture';
// import { binaryData } from './mock';
// import { binaryData } from './mock2';
// import { binaryData } from './mock3';
// import { binaryData } from './new-demo.ts';
// import { binaryData } from './mock2-new.ts';

// import { fabric } from 'fabric';
// import PsBrush from './components/PSBrush.vue';
// import bg from './image.png';
// import bg from './demo.jpeg';
// import Pressure from 'pressure';
// import CountDuration from './utils/countDuration';
// import { PSBrush } from '@arch-inc/fabricjs-psbrush';

const compressUrl = ref('');
let currentPressure = 0;
const imgUrl = ref('');
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
  console.log(
    'https://codesandbox.io/s/experiment-with-undo-psbrush-e884yk?file=/src/index.js:641-696'
  );
  init(); // 执行初始化函数
  // drawLine();

  // 持续时间统计
  // const countCorrectTime = new CountDuration();
  // countInstance = countCorrectTime;
  // countCorrectTime.startCorrection();
  // Pressure.set('#pressBox', {
  //   change: function (force) {
  //     this.innerHTML = force;
  //   },
  // });

  // canvas.freeDrawingBrush.width = 20;

  // Pressure.set('.upper-canvas', {
  //   change: function (force) {
  //     pressureGlobal.value = force;
  //     // this.innerHTML = force;
  //   },
  //   start: function (event) {
  //     // console.log(ev);
  //     // this is called on force start
  //   },
  //   end: function () {
  //     // this is called on force end
  //   },
  //   startDeepPress: function (event) {
  //     // this is called on "force click" / "deep press", aka once the force is greater than 0.5
  //   },
  //   endDeepPress: function () {
  //     // this is called when the "force click" / "deep press" end
  //   },
  //   // change: function(force, event){
  //   //   // this is called every time there is a change in pressure
  //   //   // 'force' is a value ranging from 0 to 1
  //   // },

  //   unsupported: function () {
  //     console.log('不支持画笔');
  //     // NOTE: this is only called if the polyfill option is disabled!
  //     // this is called once there is a touch on the element and the device or browser does not support Force or 3D touch
  //   },
  // });

  // 2进制预览:方法一
  // const blobUrl = `data:image/jpeg;base64,${btoa(binaryData)}`;
  // imgUrl.value = blobUrl;
  // 方法二
  // 将二进制流字符串转换为Uint8Array;
  // const uint8Array = new Uint8Array(binaryData.length);
  // for (let i = 0; i < binaryData.length; i++) {
  //   uint8Array[i] = binaryData.charCodeAt(i);
  // }
  // console.log(uint8Array, '===uint8Array');

  // const arrayBuffer1 = new ArrayBuffer(mockData.length);
  // const wrapperBuffer = new Int16Array(arrayBuffer1);
  // for (let i = 0; i < mockData.length; i++) {
  //   wrapperBuffer[i] = mockData[i];
  // }
  // console.log(wrapperBuffer, '==wrapperBuffer');

  // // 创建Blob对象
  const byteArray = new Uint8Array(
    binaryData.match(/.{1,2}/g).map((byte) => parseInt(byte, 16))
  );
  const blob = new Blob([byteArray], { type: 'image/jpeg' });

  imgUrl.value = URL.createObjectURL(blob);

  // 方法三 直接读取2进制 转换后的unit8Array  读取直接失败
  // const uint8Array = new Uint8Array(binaryData.length);
  // for (let i = 0; i < binaryData.length; i++) {
  //   uint8Array[i] = binaryData[i];
  // }
  // console.log(uint8Array, '===unit8Arry');
  // const blob = new Blob([uint8Array], { type: 'image/jpeg' });

  // // 创建URL对象，用于生成预览图
  // imgUrl.value = URL.createObjectURL(blob);
});

function finishCorrect() {
  // 替换'canvas-id'为你实际的canvas元素ID
  var dataURL = canvas.toDataURL({
    format: 'jpeg',
    quality: 1,
  });
  console.log(dataURL, '===dataURL');
  // Step 2: 将DataURL转换为Blob
  function dataURItoBlob(dataURI) {
    var byteString = atob(dataURI.split(',')[1]);
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    console.log(ab, '====二进制流吗');
    const tempBlob = new Blob([ab], { type: mimeString });
    console.log(tempBlob, '====真是 tempBlob');
    new Compressor(tempBlob, {
      quality: 0.8,

      // The compression process is asynchronous,
      // which means you have to access the `result` in the `success` hook function.
      success(result) {
        console.log(result, '===blob  result', result.size / 1024 / 1024);

        compressUrl.value = URL.createObjectURL(result);
        console.log(compressUrl.value, '====compressUrl.value');
        const formData = new FormData();

        // The third parameter is required for server
        formData.append('file', result, result.name);

        // Send the compressed image file to server with XMLHttpRequest.
        // axios.post('/path/to/upload', formData).then(() => {
        //   console.log('Upload success');
        // });
      },
      error(err) {
        console.log(err.message);
      },
    });
  }

  // var blob = dataURItoBlob(dataURL);
  // console.log(blob, '==blob');
  // if (countInstance) {
  //   countInstance.stopCorrectionTimer();
  //   const res = countInstance.getTotalCorrectionTime();
  //   console.log(res, '===批改时长');
  // }
}
function loadImg() {
  // const img = new Image();
  // img.onload = function () {
  //   console.log(img, '===img');
  //   // img.src
  // };
  // img.src = URL.createObjectURL(blob);
}

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
    const averagePressure =
      pressureHistory.reduce((sum, val) => sum + val) / pressureHistoryLength;
    // penPressure = easeOutExpo(penPressure);
    console.log(penPressure, '===penPressure2', averagePressure);
    // pressureGlobal.value = averagePressure;
    [lastX, lastY] = [currentX, currentY];
    lastSpeed = speed;
  }

  function stopDrawing() {
    isDrawing = false;
    penPressure = 0;
    pressureHistory = Array(pressureHistoryLength).fill(0);
    // pressureHistory = Array(pressureHistoryLength).fill(0);
  }
}

function init() {
  copyCanvas = canvas = new fabric.Canvas('drawBox', {
    isDrawingMode: true,
    enablePointerEvents: true,
    width: 1000, // 宽 100px
    height: 500, // 高 60px
  }); // 这里传入的是canvas的id

  let brush = new fabric.PSBrush(canvas);

  brush.width = 5;
  brush.color = 'red';
  // brush.disableTouch = true; // disable touch and only use mouse and pen devices
  // brush.pressureManager.fallback = 0.3; // fallback value for mouse and touch events

  // canvas.rotate = Math.PI / 2;
  // canvas.rotate = 45;
  // canvas.requestRenderAll();
  console.log('init');
  canvas.freeDrawingBrush = brush;
  pressurePen();
  // canvas.freeDrawingBrush = new fabric.InkBrush(canvas, {
  //   width: 20,
  //   opacity: 0.6,
  //   color: '#ff0000',
  // });
  // const rect1 = new fabric.Rect({
  //   left: 100,
  //   top: 100,
  //   width: 100,
  //   height: 100,
  //   fill: 'red',
  // });

  // 设置矩形动画
  // rect1.animate('angle', '-50', {
  //   onChange: canvas.renderAll.bind(canvas), // 每次刷新的时候都会执行
  // });

  // canvas.add(rect1);

  // const bgUrl = 'http://img.daimg.com/uploads/allimg/210916/3-210916110348.jpg';

  // canvas.setBackgroundImage(bg, canvas.renderAll.bind(canvas));
  setTimeout(() => {
    console.log('canvas===', canvas);
    console.log('canvas===json', canvas.toJSON());
  }, 2000);

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

  // 设置画笔粗细
  // canvas.freeDrawingBrush.width = 10;
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
  // const rect = new fabric.Rect({
  //   top: 30, // 距离容器顶部 30px
  //   left: 30, // 距离容器左侧 30px
  //   width: 100, // 宽 100px
  //   height: 60, // 高 60px
  //   fill: 'red', // 填充 红色
  //   // excludeFromExport: true,
  // });

  // // 在canvas画布中加入矩形（rect）。add是“添加”的意思
  // canvas.add(rect);
  // updateModifications(true);
}
function updateModifications(savehistory: boolean) {
  var obj = JSON.stringify(canvas.toObject());
  state.push(obj);
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
  // copyCanvas.backgroundImage.excludeFromExport = true;  //裁剪需要
  console.log(copyCanvas.toObject(), '===canvas222');
  console.log(copyCanvas, '===canvas', canvas.backgroundImage);

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
  margin-top: 30px;
}
.pressure-area {
  width: 200px;
  height: 200px;
  border: 1px solid red;
}
</style>

<style>
canvas {
  touch-action: none;
}
</style>
