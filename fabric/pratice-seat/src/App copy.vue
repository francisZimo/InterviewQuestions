<template>
  <div class="canvas-wrapper" >
    <div id="canvasCon" class="canvasCon">
      <div class="canvasInner">
        <Tip :seat-info="seatInfo" v-show="curSeat===oldSeat"></Tip>
        <canvas id="drawBox" class="drawBox" style="border: 1px solid red"></canvas>
      </div>

    </div>

  </div>
 
</template>


<script setup lang="ts">
import { onMounted, ref ,reactive} from 'vue';
import { seatData } from './utils/Data'
import Tip from './components/tip.vue'
import {fabric} from 'fabric'
import interact from 'interactjs';

const seatInfo=reactive({
  title:'',
  top:0,
  left:0
})  
const  curSeat=ref(-1)
const oldSeat=ref(-99)

var canvas: any;
var touchStartDistance = 0;
var touchStartScale = 1;
var boxDom=''

function init() {
  console.log('wohaha')
  boxDom=document.getElementById('canvasCon');
  console.log(fabric,'==fabric.canvas')
 canvas = new fabric.Canvas('drawBox', {
    width: 200, // 宽 100px
    height: 200, // 高 60px
    selection:false
  }); // 这里传入的是canvas的id
  
var angleScale = {
  angle: 0,
  scale: 1
}
var interactPosition = { x: 0, y: 0 };

const interactInstance = interact('#canvasCon')

interactInstance.gesturable({
    listeners: {
      start (event) {
        angleScale.angle -= event.angle

        console.log(event,'==start')
        
      },
      move (event) {
        console.log(event,'==move')
        let currentScale=event.scale*angleScale.scale;
        // console.log(boxDom,'==boxDom',boxDom.style.transform)
        // boxDom?.style?.transform = 'scale(' + currentScale + ')';
        dragMoveListener(event)
        if(boxDom){
          boxDom.style.transform = `translate(${interactPosition.x}px, ${interactPosition.y}px) scale(${currentScale})`;
        }
        // event.target.style.transform = ` scale(${currentScale})`;

        // // document.body.appendChild(new Text(event.scale))
        // var currentAngle = event.angle + angleScale.angle
        // var currentScale = event.scale * angleScale.scale

        // scaleElement.style.transform =
        //   'rotate(' + currentAngle + 'deg)' + 'scale(' + currentScale + ')'

        // // uses the dragMoveListener from the draggable demo above
        // dragMoveListener(event)
      },
      end (event) {
        console.log(event,'===end')
      }
    }
  })
  .draggable({
    listeners: { move: dragMoveListener }
  })
  function dragMoveListener(event){
    console.log(event,'==eventdragMoveListener')

    interactPosition.x += event.dx;
    interactPosition.y += event.dy;
        event.target.style.transform = `translate(${interactPosition.x}px, ${interactPosition.y}px)`;
   
  }
  // interactInstance.draggable({
  //   listeners: {
  //     // call this function on every dragmove event
  //     move: dragMoveListener,
  //   }
  // })


// canvas.add(path);
let width=0,position={left:0,top:0,x:0,y:0};
   const circle1 = new fabric.Circle({
    radius: 20/2,
    fill: 'blue',
    top: position.y,
    left: position.x,
    selectable: false,
  })
  circle1.set({
    'visible':false
  })
 




const seatList=seatData.datas;
seatList.forEach((item)=>{
  let type='seat'
  if(item.class.indexOf('RowNode')>-1){
    type='row'
  }
  const params={
    name:item.p.name,
    location:{
      x:item.p.location.x,
      y:item.p.location.y
    },
    width:item.p.width,
    height:item.p.height,
    type,
    style:item.s
  }
  width=item.p.width
  console.log(params,'===params')
  if(type==='row'){
    // 矩形
    // const rect = new fabric.Rect({
    //   // width: params.width,
    //   // height: params.height,
    //   fill: '#f55',
    //   left: params.location.x+params.style['label.xoffset'],
    //   top: params.location.y,
    //   selectable:false,
    // })
    // console.log(params.location.x+params.style['label.xoffset'],'===row1')
    // // 添加文本
    // var text = new fabric.Text(params.name, {
    //   top: rect.top+5 ,
    //   left: rect.left +3,
    //   fill: 'blue',
    //   fontSize:10,
    //   selectable:false,
    // });
    //     canvas.add(rect);
    //     canvas.add(text);
  }else{
    // 圆形
    const circle = new fabric.Circle({
    radius: params.width/2,
    fill: '#f55',
    top: params.location.y,
    left: params.location.x,
    selectable: false,
    extraInfo:params
  })

  // 添加文本
  var text = new fabric.Text(params.name, {
    top: circle.top+5 ,
    left: circle.left +3,
    fill: 'black',
    fontSize:10,
  });
  
  // 注册点击事件
  
  circle.on('mousedown', function(options) {
    
  console.log(options,'==options');
 
    const {top,left,width ,extraInfo}= options.target
    if(oldSeat.value===extraInfo.name){
    
    oldSeat.value=-99;
    circle1.set({
      visible:false
    })
    return;
  }
    position.left=left;
    position.top=top;
    console.log(top,left,'==xxx')
    seatInfo.title=extraInfo.name;
    seatInfo.top=top;
    seatInfo.left=left+width/2;
    curSeat.value=extraInfo.name;
    oldSeat.value=curSeat.value;

    console.log(width,'===width',position)
    // circle1.set({
    //   radius:width/2,
    //   left:position.left,
    //   top:position.top,
    //   visible:true
    // })
    circle1.set({
      radius:width/2,
      left:position.left,
      top:position.top,
    'visible':true
  })
  // const params=extraInfo
  //   const circle1 = new fabric.Circle({
  //   radius: params.width/2,
  //   fill: 'blue',
  //   top: params.location.y,
  //   left: params.location.x,
  //   selectable: false,
  //   extraInfo:params
  // })
  // circle1.hoverCursor='pointer'
  // circle1.on('mousedown', function(options) {
  //   const {extraInfo}= options.target
  //   if(oldSeat.value===extraInfo.name){
  //   oldSeat.value=-99;
  //   //移除自身
  //   canvas.remove(circle1)

  //   return;
  // }
  // })
  // canvas.add(circle1);


    // 再次点击关闭
});



  circle.hoverCursor = 'pointer'
  canvas.add(circle);
  // canvas.add(text);
  }
    

})
 
canvas.add(circle1)
  // 放到顶层
  canvas.bringToFront(circle1);
canvas.renderAll();
}
onMounted(
  ()=>{
  init();}
  )
</script>

<style lang="scss" scoped>
html,body{
  width: 100%;
  height:100%;
}
.canvas-wrapper{
  position:relative; 
  // background-color: aqua;
  width: 100%;
  height:100%;

}
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
<style >
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
.canvasCon{
  position:absolute;

 border:1px solid green;
 min-height: 90%;
    min-width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: -moz-fit-content;
    width: fit-content;
}
.canvasInner{
  position:relative;
  display: inline-block;
}
.drawBox{
  width: 200px;
  height: 200px;
}
</style>
./utils/DataTotal./utils/Data-area./utils/Datatotal./utils/Data-area1