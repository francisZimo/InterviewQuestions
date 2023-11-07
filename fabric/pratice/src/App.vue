<template>
  <div class="canvas-wrapper">
    <Tip :seat-info="seatInfo" v-show="curSeat===oldSeat"></Tip>
  <canvas id="drawBox" style="border: 1px solid red"></canvas>
  </div>
 
</template>

<script setup lang="ts">
import { onMounted, ref ,reactive} from 'vue';
import { seatData } from './utils/Data'
import Tip from './components/tip.vue'
const seatInfo=reactive({
  title:'',
  top:0,
  left:0
})  
const  curSeat=ref(-1)
const oldSeat=ref(-99)

var canvas: any;
function init() {

 canvas = new fabric.Canvas('drawBox', {
    width: 1000, // 宽 100px
    height: 500, // 高 60px
    selection:false
  }); // 这里传入的是canvas的id
  

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
.canvas-wrapper{
  position:relative; 
  // background-color: aqua;
  width: 1000px;
  height: 500px;

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
