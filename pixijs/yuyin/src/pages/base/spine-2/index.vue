<template>
  <div ref="conDom"></div>
</template>

<script setup lang="ts">
import { Ref, onMounted, ref } from 'vue';
import * as PIXI from 'pixi.js';
import { Spine } from 'pixi-spine';
const conDom: Ref<HTMLElement | null> = ref(null);

onMounted(() => {
  //   PIXI.Assets.load('longxi/vist_longxi__68_69.json').then(onAssetsLoaded);
  // 愤怒
  const app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 'rgba(255,222,111,0.1)'
  });
  if (!conDom.value) return;
  conDom.value.appendChild(app.view);
  // PIXI.Assets.load('data/Boy_ShortsShirt_Angry.json').then(onAssetsLoaded);
  // function onAssetsLoaded(dragonAsset) {
  //   console.log(dragonAsset, '===angry');
  //   const person = new Spine(dragonAsset.spineData);
  //   person.position.set(100, 500);
  //   app.stage.addChild(person);

  //   person.state.setAnimation(0, 'angry_sender_0', true);
  // }

  // let dragon;
  // PIXI.Assets.load('longxi/vist_longxi__68_69.json').then(onAssetsLoaded1);
  // function onAssetsLoaded1(dragonAsset) {
  //   console.log(dragonAsset, '===dragonAsset');
  //   dragon = new Spine(dragonAsset.spineData);
  //   dragon.position.set(50, 50);
  //   app.stage.addChild(dragon);

  //   dragon.state.setAnimation(0, 'mof', true);
  // }

  // let s = false;
  // setInterval(() => {
  //   s ? dragon.state.setAnimation(0, 'shuijiao', true) : dragon.state.setAnimation(0, 'mof', true);
  //   s = !s;
  // }, 3000);

  // 换肤
  let goblin;
  // PIXI.Assets.load('data/goblins-ess.json').then(onAssetsLoaded2);
  PIXI.Assets.load('data/ip_huanzhuang.json').then(onAssetsLoaded2);
  function onAssetsLoaded2(dragonAsset) {
    const person = new Spine(dragonAsset.spineData);
    person.position.set(500, 500);
    console.log(person, '===person', person.state);
    goblin = person;
    app.stage.addChild(person);
    // person.state.setAnimation(0, 'walk', true);
    // person.skeleton.setSkinByName('goblin');

    // 哥布林局部

    // const slot = person.skeleton.findSlot('pelvis');
    // const attachment = slot.getAttachment();

    // const slot2 = person.skeleton.findSlot('right-arm');
    // console.log(slot2, '===slot2', slot);
    // slot2.setAttachment(attachment);

    // const loader = PIXI.Assets.load;
    // loader('spritesheet', 'path/to/spritesheet.json')
    //       .load((loader, resources) => {
    //           const spritesheet = resources.spritesheet;

    //           // Now you can access individual textures from the spritesheet
    //           const texture = spritesheet.textures['image.png'];

    //           // Create a sprite using the loaded texture
    //           const sprite = new PIXI.Sprite(texture);

    //           // Add the sprite to the stage
    //           app.stage.addChild(sprite);
    //       });

    // 加载图集json
    // PIXI.Assets.load('data/texture.json').then(res => {
    //   const texture = res.textures['door.png'];
    //   person.hackTextureBySlotName('toufa_1', texture);
    // });

    // 单张替换
    // data/toufa_4.png

    // PIXI.Assets.load('https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg').then((res) => {
    //   person.hackTextureBySlotName('toufa_1', res);
    // });

    // var myTexture = PIXI.Assets.load('data/ip_huanzhuang.png').then(res => {
    //   console.log(res, '===resxxx')
    //   // const slot = person.skeleton.findSlot('zuodabi_1');
    //   person.hackTextureBySlotName('toufa_1', res);
    // });
    // texture

    // person.hackTextureBySlotName('toufa_1', myTexture);

    // renwu

    // const slot = person.skeleton.findSlot('zuodabi_1');

    // const attachment = slot.getAttachment();
    // console.log(attachment, '==attachment', slot)

    // 方法2:插槽替换(目前导出的json和理想中有出入)
    // const slot = person.skeleton.findSlot('zuodabi_1');
    // const attachment = slot.getAttachment();
    // const slot2 = person.skeleton.findSlot('toufa_1');
    // slot2.setAttachment(attachment);

    // person.state.setAttachment('toufa_1', 'toufa_3');

    // person.skeleton.setAttachment("shenti_1", "shenti_3");
    // const attachment = person.skeleton.getAttachmentByName('shenti_1', 'shenti_3');
    // console.log(attachment, '==attachment')
    // console.log(person.skeleton, '==person.skeleton')
  }

  // let s = false;
  // setInterval(() => {
  //   s ? goblin.skeleton.setSkinByName('goblingirl') : goblin.skeleton.setSkinByName('goblin');;
  //   s = !s;
  // }, 3000);
});
</script>

<style lang="scss" scoped></style>
