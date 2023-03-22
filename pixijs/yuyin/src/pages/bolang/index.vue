<template>
  <div ref="conDom"></div>
</template>

<script setup lang="ts">
import { ref, Ref, onMounted } from 'vue';
import * as PIXI from 'pixi.js';
import { ShockwaveFilter } from 'pixi-filters';
import { appendToMemberExpression } from '@babel/types';
const conDom: Ref<HTMLDivElement | null> = ref(null);

onMounted(() => {
  console.log('cccc');
  const app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 'rgba(255,255,255,0.3)'
  });
  console.log('hah');
  if (!conDom.value) return;
  console.log('jinru');
  conDom!.value.appendChild(app.view);

  const texture = PIXI.Texture.from('assets/car.png');
  const sprite = new PIXI.Sprite(texture);
  sprite.width = app.screen.width;
  sprite.height = app.screen.height;
  const container = new PIXI.Container();
  container.addChild(sprite);
  app.stage.addChild(container);

  // 添加文字
  const text = new PIXI.Text('SSR', {
    fontFamily: 'Arial',
    fontSize: 100,
    fill: 0xffffff,
    align: 'center',
    dropShadow: true,
    dropShadowColor: '#000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 4,
    dropShadowDistance: 10
  });
  text.x = app.screen.width / 2;
  text.y = app.screen.height / 2;
  text.anchor.set(0.5);
  container.addChild(text);

  // 添加置换滤镜
  const displacementSprite = PIXI.Sprite.from('assets/yin.png');
  displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
  const displacementFilter = new PIXI.DisplacementFilter(displacementSprite);
  container.addChild(displacementSprite);

  // 创建水波纹
  const shockwaveFilter1 = new ShockwaveFilter(
    [Math.random() * app.screen.width, Math.random() * app.screen.height],
    {
      radius: 50, // 半径
      wavelength: 200, // 波浪长度
      amplitude: 50, //振幅
      speed: 200 // 溅起速度
    },
    0
  );
  const shockwaveFilter2 = new ShockwaveFilter(
    [Math.random() * app.screen.width, Math.random() * app.screen.height],
    {
      radius: 30, // 半径
      wavelength: 80, // 波浪长度
      amplitude: 100, //振幅
      speed: 300 // 溅起速度
    },
    0
  );
  const shockwaveFilter3 = new ShockwaveFilter(
    [Math.random() * app.screen.width, Math.random() * app.screen.height],
    {
      radius: 60, // 半径
      wavelength: 100, // 波浪长度
      amplitude: 140, //振幅
      speed: 200 // 溅起速度
    },
    0
  );
  const shockwaveFilter4 = new ShockwaveFilter(
    [Math.random() * app.screen.width, Math.random() * app.screen.height],
    {
      radius: 60, // 半径
      wavelength: 90, // 波浪长度
      amplitude: 140, //振幅
      speed: 200 // 溅起速度
    },
    0
  );
  const shockwaveFilter5 = new ShockwaveFilter(
    [Math.random() * app.screen.width, Math.random() * app.screen.height],
    {
      radius: 60, // 半径
      wavelength: 150, // 波浪长度
      amplitude: 140, //振幅
      speed: 200 // 溅起速度
    },
    0
  );

  container.filters = [
    displacementFilter,
    shockwaveFilter1,
    shockwaveFilter2,
    shockwaveFilter3,
    shockwaveFilter4,
    shockwaveFilter5
  ];

  function createWave(waveFilter, resetTime) {
    waveFilter.time += 0.01;
    if (waveFilter.time > resetTime) {
      (waveFilter.time = 0),
        (waveFilter.center = [Math.random() * app.screen.width, Math.random() * app.screen.height]);
    }
  }
  //   nbRipples: 1,
  //   pixelate: false,
  //   paused: false,
  //   autoFit: false
  app.ticker.add((delta) => {
    displacementSprite.x += 1;
    displacementSprite.y += 1;
    createWave(shockwaveFilter1, 1);
    createWave(shockwaveFilter2, 2);
    createWave(shockwaveFilter3, 1.5);
    createWave(shockwaveFilter4, 3);
    createWave(shockwaveFilter5, 2);
  });

  // 监听点击事件
  app.view.addEventListener('click', (e) => {
    console.log(e.clientX, e.clientY, shockwaveFilter1.radius);
    shockwaveFilter1.center = [e.clientX, e.clientY];
    shockwaveFilter1.time = 0;
  });
});
</script>

<style lang="scss" scoped></style>
