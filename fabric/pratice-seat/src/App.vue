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
const baseXPoint=500;
const baseYPoint=500;

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
    width: 1000, // 宽 100px
    height: 1000, // 高 60px
    selection:false
  }); // 这里传入的是canvas的id
  // 缩小0.5
  canvas.setZoom(0.5);
  
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
  });
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
 
handleData();

return 
// 座位展示
const seatList=seatData.datas;

seatList.forEach((item)=>{
  let type='seat'
  if(item.class.indexOf('SteageNode')>-1){
    type='stage'
  }
  if(item.class.indexOf('RegionNode')>-1){
    type='Region'
  }
  if(item.class.indexOf('RowNode')>-1){
    type='row'
  }
  if(item.class.indexOf('SeatNode')>-1){
    type='seat'
  }



  if(type==='stage'){
    
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
  if(type==='stage'){

  }

  if(type==='row'){
  
  }
  
  if(type==='seat'){
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
  // var text = new fabric.Text(params.name, {
  //   top: circle.top+5 ,
  //   left: circle.left +3,
  //   fill: 'black',
  //   fontSize:10,
  // });
  
  // 注册点击事件
  
//   circle.on('mousedown', function(options) {
    
//   console.log(options,'==options');
 
//     const {top,left,width ,extraInfo}= options.target
//     if(oldSeat.value===extraInfo.name){
    
//     oldSeat.value=-99;
//     circle1.set({
//       visible:false
//     })
//     return;
//   }
//     position.left=left;
//     position.top=top;
//     console.log(top,left,'==xxx')
//     seatInfo.title=extraInfo.name;
//     seatInfo.top=top;
//     seatInfo.left=left+width/2;
//     curSeat.value=extraInfo.name;
//     oldSeat.value=curSeat.value;

//     console.log(width,'===width',position)
//     // circle1.set({
//     //   radius:width/2,
//     //   left:position.left,
//     //   top:position.top,
//     //   visible:true
//     // })
//     circle1.set({
//       radius:width/2,
//       left:position.left,
//       top:position.top,
//     'visible':true
//   })
// });



//   circle.hoverCursor = 'pointer'
//   canvas.add(circle);
//   // canvas.add(text);
  }
    

})
 
// canvas.add(circle1)
//   // 放到顶层
//   canvas.bringToFront(circle1);
// canvas.renderAll();
}


function handleStage(stageInfo){
  // 绘制正方形
  const rect = new fabric.Rect({
    // left: stageInfo.p.location.x,
    // top: stageInfo.p.location.y,
    left: baseXPoint+stageInfo.p.location.x,
    top: baseYPoint+stageInfo.p.location.y,
    width: stageInfo.p.width,
    height: stageInfo.p.height,
    selectable: false,
    fill: 'transparent',
    extraInfo:stageInfo,
    stroke: 'black',
    strokeWidth:2
  });
  // 绘制text 在上面的矩形框内居中对齐
  var text = new fabric.Text(stageInfo.p.name, {
    top: rect.top+rect.height/2 ,
    left: rect.left +rect.width/2,
    fill: 'red',
    fontSize:10,
    selectable: false,
  });
  
  console.log('舞台绘制')
  canvas.add(rect);
  canvas.add(text);
}

function handleRegion(info){
  const s=info.s
  let element;
  if(s['vector.shape']&&s['vector.shape']==='rectangle'){
    // 绘制正方形

  const rect = new fabric.Rect({
    left: baseXPoint+info.p.location.x,
    top: baseYPoint+info.p.location.y,
    width: info.p.width,
    height: info.p.height,
    selectable: false,
    fill: 'transparent',
    extraInfo:info,
    stroke: 'black',
    strokeWidth:2
  });
  canvas.add(rect);
  element=rect;
  }

  if(s['vector.shape']&&s['vector.shape']==='circle'){
      // 绘制圆形
  const circle = new fabric.Circle({
    radius: info.p.height/2,
    fill: 'transparent',
    stroke: 'black',
    strokeWidth: 2,
    top: baseYPoint+info.p.location.y,
    left: baseXPoint+info.p.location.x+info.p.width/2-info.p.height/2,
    selectable: false,
    extraInfo:info
  })
   canvas.add(circle);
   element=circle;
  }
  
  const style=info.s
  
  console.log(style,'===style')
  // 绘制text 在上面的矩形框内居中对齐
  if(element){
    var text = new fabric.Text(info.p.name, {
    top: element.top+element.height/2 +(style['label.yoffset']||0),
    left: element.left +element.width/2+(style['label.xoffset']||0),
    fill: 'red',
    fontSize:10,
    selectable: false,
  });
  
  console.log('区域绘制')

  canvas.add(text);
  }
 
}


function handleRow(info){
  // 绘制text
  const style=info.s
  var text = new fabric.Text(info.p.name, {
    top: baseYPoint+info.p.location.y+(style['label.yoffset']||0),
    left: baseXPoint+info.p.location.x+(style['label.xoffset']||0),
    fill: 'red',
    fontSize:10,
    selectable: false,
  });
  canvas.add(text);
}

function handleSeat(info){
  // 圆形
  const position=info.p
  console.log(position,'==position')
  const circle = new fabric.Circle({
    radius: position.width/2,
    fill: 'blue',
    stroke: 'black',
    strokeWidth: 2,
    top: baseYPoint+position.location.y,
    left:baseXPoint+ position.location.x,
    selectable: false,
    extraInfo:info
  })

  // 添加文本
  var text = new fabric.Text(position.name, {
    top: circle.top+5 ,
    left: circle.left +3,
    fill: 'black',
    fontSize:10,
  });

  canvas.add(circle);
  // canvas.add(text);
}

function handleShapeRegion(info){
  //绘制path
  const position=info.p
  const positionList=position.points;
  console.log(positionList,'==positionList')
  let str='';
  positionList.forEach((item,index)=>{
    if(index===0){
      str+=`M${baseXPoint+item.x} ${baseYPoint+item.y}`
    }else{
      str+=`L${baseXPoint+item.x} ${baseYPoint+item.y}`
    }
  })
  str+='Z'
  const path=new fabric.Path(str)
  path.set({
    top: baseXPoint+position.location.y, 
    left: baseYPoint+position.location.x,
    fill: '#f8f8f8', // 填充 亮粉色
    stroke: 'black', // 描边颜色 黑色
    strokeWidth: 2 // 描边粗细 10px
  })

  // 绘制文本
  const style=info.s
  // console.log()
  var text = new fabric.Text(info.p.name, {
    top: baseYPoint+ position.location.y+position.height/2 +(style['label.yoffset']||0),
    left: baseXPoint+position.location.x+position.width/2+ (style['label.xoffset']||0),
    fill: 'red',
    fontSize:10,
    selectable: false,
  });
  canvas.add(path);
  setTimeout(()=>{
    console.log('==新增text',text)
    canvas.add(text);
  },200)
  
}

function handleData(){
  // 座位展示
  const seatList=seatData.datas;
  seatList.forEach((item)=>{
    let type='seat'
    if(item.class.indexOf('StageNode')>-1){
      type='stage'
    }
    if(item.class.indexOf('RegionNode')>-1&&item.class.indexOf('ShapeRegionNode')){
      type='region'
    }
    if(item.class.indexOf('ShapeRegionNode')>-1){
      type='shapeRegion'
    }
    
    if(item.class.indexOf('RowNode')>-1){
      type='row'
    }
    if(item.class.indexOf('SeatNode')>-1){
      type='seat'
    }

    console.log(type,'===typexx')

    if(type==='stage'){
      handleStage(item)
    }
    
    if(type==='region'){
      console.log('==region')
      handleRegion(item)
    }


    if(type==='shapeRegion'){
      handleShapeRegion(item)
    }

    if(type==='row'){
      setTimeout(()=>{
        handleRow(item)
      },101)
      
    }
    if(type==='seat'){
      setTimeout(()=>{
        handleSeat(item)
      },100)
     
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
    console.log(params,'===params')
    
    if(type==='seat'){
      // 圆形
      const circle = new fabric.Circle({
      radius: params.width/2,
      fill: '#f55',
      top: params.location.y,
      left: params.location.x,
      selectable: false,
      extraInfo:params
    })

    }
      

  })
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
  width: 300px;
  height:300px;
}
</style>
./utils/DataTotal./utils/Data-area./utils/Datatotal./utils/Data-area1