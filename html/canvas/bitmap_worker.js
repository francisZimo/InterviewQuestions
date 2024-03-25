var offscreen,ctx;
onmessage = function (e) {
  if(e.data.msg == 'init'){
    init();
    draw();
  }else if(e.data.msg == 'draw'){
    draw();
  }
}

function init() {
   
  offscreen = new OffscreenCanvas(1000*2, 1000*2);
  ctx = offscreen.getContext("2d");
    ctx.scale(2,2);
  
}

function draw() {
   ctx.clearRect(0,0,offscreen.width,offscreen.height);
   for(var i = 0;i < 10000;i ++){
    for(var j = 0;j < 1000;j ++){
      
      ctx.fillRect(i*3,j*3,2,2);
    }
  }
  var imageBitmap = offscreen.transferToImageBitmap();  
  postMessage({imageBitmap:imageBitmap},[imageBitmap]);
}