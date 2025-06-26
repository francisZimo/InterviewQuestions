<template>
  <div ref="conDom"></div>
</template>

<script setup lang="ts">
import { Ref, onMounted, ref } from 'vue';
import * as PIXI from 'pixi.js';
import { Spine } from 'pixi-spine';
const conDom: Ref<HTMLElement | null> = ref(null);

onMounted(() => {
  const app = new PIXI.Application({
    width: 400,
    height: 400,
    backgroundColor: '#f00000'
  });
  if (!conDom.value) return;
  conDom.value.appendChild(app.view);
  //   PIXI.Assets.load('longxi/vist_longxi__68_69.json').then(onAssetsLoaded);
  // 愤怒
  //   PIXI.Assets.load('data/Boy_ShortsShirt_Angry.json').then(onAssetsLoaded);
  //   function onAssetsLoaded(dragonAsset) {
  //     console.log(dragonAsset, '===dragonAsset');
  //     const person = new Spine(dragonAsset.spineData);
  //     person.position.set(300, 500);
  //     app.stage.addChild(person);

  //     person.state.setAnimation(0, 'angry_sender_0', true);
  //   }

  //   let dragon;
  //   PIXI.Assets.load('longxi/vist_longxi__68_69.json').then(onAssetsLoaded1);
  //   function onAssetsLoaded1(dragonAsset) {
  //     console.log(dragonAsset, '===dragonAsset');
  //     dragon = new Spine(dragonAsset.spineData);
  //     dragon.position.set(50, 50);
  //     app.stage.addChild(dragon);

  //     dragon.state.setAnimation(0, 'mof', true);
  //   }

  //   let s = false;
  //   setInterval(() => {
  //     s ? dragon.state.setAnimation(0, 'shuijiao', true) : dragon.state.setAnimation(0, 'mof', true);
  //     s = !s;
  //   }, 3000);

//   {
//   "json": "https://static0.xesimg.com/xes-fe-static-storage-webjs/pixi/shuxue/nan/nan.json",
//   "png": "https://static0.xesimg.com/xes-fe-static-storage-webjs/pixi/shuxue/nan/nan.png",
//   "atlas": "https://static0.xesimg.com/xes-fe-static-storage-webjs/pixi/shuxue/nan/nan.atlas"
// }
  PIXI.Assets.load( "https://static0.xesimg.com/xes-fe-static-storage-webjs/pixi/yingyu/nv/nv.json").then(onAssetsLoaded1);
  function onAssetsLoaded1(dragonAsset) {
    console.log(dragonAsset, '===dragonAsset');
    const dragon = new Spine(dragonAsset.spineData);
    dragon.position.set(200, 380);
    dragon.scale.set(0.3);
    app.stage.addChild(dragon);
    dragon.state.setAnimation(0, 'idle', true);
  }
});
</script>

<style lang="scss" scoped></style>
