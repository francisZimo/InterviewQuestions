<template>
  <button @click="goNext">切换一下动画{{ curIndex + 1 }}</button>
  <div class="canvasBox" ref="conDom"></div>
</template>

<script setup lang="ts">
import { Ref, onMounted, ref } from 'vue';
import * as PIXI from 'pixi.js';
import { Spine } from 'pixi-spine';
import { isHitSlot } from './spineUtils';
import { Howl } from 'howler';
const conDom: Ref<HTMLElement | null> = ref(null);
let spineELe: any;

const curIndex = ref(9);

function goNext() {
  curIndex.value = curIndex.value + 1;
  spineELe.state.setAnimation(0, `${curIndex.value}`, false);
}

onMounted(() => {
  let animationId;
  var sound = new Howl({
    src: ['/test.mp3'],
    onend: function () {
      console.log('Finished!');
    }
  });
  sound.play();
  const handleSeek = () => {
    const seek = sound.seek();
    console.log('播放进度', sound.seek(), sound.duration());
    if (sound.playing()) {
      let percent = (sound.seek() / sound.duration()) * 100;
      if (percent > 99) {
        console.log('播放完成');
        cancelAnimationFrame(animationId);
        return;
      }
    }
    animationId = requestAnimationFrame(handleSeek);
  };
  animationId = requestAnimationFrame(handleSeek);

  const app = new PIXI.Application({
    // width: window.innerWidth,
    // height: window.innerHeight,
    width: 400,
    height: 400,
    backgroundColor: 'rgba(255,222,111,0.1)',
    antialias: true
  });
  if (!conDom.value) return;
  conDom.value.appendChild(app.view);

  // 换肤
  let personSpine;
  let spinePosition = { x: 200, y: 200, scale: 1 };
  // PIXI.Assets.load('data/goblins-ess.json').then(onAssetsLoaded2);
  PIXI.Assets.load('data/fanjiang-mkf.json').then(onAssetsLoaded2);
  // PIXI.Assets.load('data/kapibala.json').then(onAssetsLoaded2);
  function onAssetsLoaded2(dragonAsset) {
    const person = new Spine(dragonAsset.spineData);
    spineELe = person;
    person.position.set(spinePosition.x, spinePosition.y);
    person.scale.set(spinePosition.scale);
    console.log('person:', person, person.state);
    personSpine = person;
    app.stage.addChild(person);
    person.state.setAnimation(0, `${curIndex.value}`, false); // idle show walk
    // // 输出所有的动画
    console.log(personSpine.state.data.skeletonData.animations, '===animations');
    // 输出所有的骨骼
    console.log(personSpine.skeleton.bones, '===personSpine.skeleton.bones');
    // // 输出所有的插槽
    console.log(personSpine.skeleton.slots, '===personSpine.skeleton.slots');
    const slotSubmit = personSpine.skeleton.findSlot('dui2');
    console.log('slotSubmit:', slotSubmit);
  }

  function isPointInPolygon(point, polygon) {
    let inside = false;
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
      const xi = polygon[i].x,
        yi = polygon[i].y;
      const xj = polygon[j].x,
        yj = polygon[j].y;
      const intersect = yi > point.y !== yj > point.y && point.x < ((xj - xi) * (point.y - yi)) / (yj - yi) + xi;
      if (intersect) inside = !inside;
    }
    return inside;
  }

  function makePolygon(bounds) {
    return [
      { x: bounds.x, y: bounds.y },
      { x: bounds.x + bounds.width, y: bounds.y },
      { x: bounds.x + bounds.width, y: bounds.y + bounds.height },
      { x: bounds.x, y: bounds.y + bounds.height }
    ];
  }

  // 抽离命中slot的方法
  // function isHitSlot(slot, pointer) {
  //   if (!slot || !pointer) {
  //     console.error('参数无效');
  //     return false;
  //   }
  //   if (slot.bone && slot.attachment) {
  //     const attachmentInfo = slot.attachment;
  //     const boneInfo = slot.bone;
  //     // 考虑到骨骼的缩放
  //     const attachmentWorldBounds = {
  //       width: attachmentInfo.width * attachmentInfo.scaleX * spinePosition.scale,
  //       height: attachmentInfo.height * attachmentInfo.scaleY * spinePosition.scale,
  //       x:
  //         spinePosition.x +
  //         (boneInfo.worldX + attachmentInfo.x - (attachmentInfo.width * attachmentInfo.scaleX) / 2) *
  //           spinePosition.scale,
  //       y:
  //         spinePosition.y +
  //         (boneInfo.worldY + attachmentInfo.y - (attachmentInfo.height * attachmentInfo.scaleY) / 2) *
  //           spinePosition.scale
  //     };
  //     const polygonBounds = makePolygon(attachmentWorldBounds);
  //     return isPointInPolygon(pointer, polygonBounds);
  //   }
  //   return false;
  // }

  app.stage.interactive = true;
  app.stage.on('pointerdown', (e) => {
    console.log('e.data.global:', e.data.global, '');
    const mousePosition = e.data.global;
    // 检测是否点击到身体插槽
    const slotSubmit = personSpine.skeleton.findSlot('dui2');
    const slotCancel = personSpine.skeleton.findSlot('x2');
    const mkf = personSpine.skeleton.findSlot('mkf');
    // youjiao
    // const slotSubmit = personSpine.skeleton.findSlot('toufa_1');
    // const slotCancel = personSpine.skeleton.findSlot('zuojiao_1');
    if (isHitSlot(mkf, mousePosition, spinePosition)) {
      console.log('点击了麦克风');
      alert('点击了麦克风');
      return;
    }
    if (isHitSlot(slotSubmit, mousePosition, spinePosition)) {
      console.log('点击了右');
      alert('点击了右');
      return;
    }

    if (isHitSlot(slotCancel, mousePosition, spinePosition)) {
      console.log('点击了左');
      alert('点击了左');
      // personSpine.state.setAnimation(0, '6', false);
      return;
    }

    // const attachment = bodySlot.getAttachment();
    // console.log('attachment:', attachment);
    // const bounds = calculateAttachmentBounds(attachment, bodySlot);
    // console.log('Attachment bounds:', bounds);

    // const attachmentBounds = attachment;
    // console.log('attachmentBounds', attachmentBounds);
    // if (attachmentBounds && attachmentBounds.containsPoint(mousePosition.x, mousePosition.y)) {
    //   console.log('点击了身体插槽');
    //   // personSpine.state.setAnimation(0, 'walk', true);
    // }

    // 检测是否点击到手部骨骼
    // const handBone = spineAnimation.spineData.findBone('hand');
    // if (handBone && spineAnimation.containsPoint(handBone, mousePosition.x, mousePosition.y)) {
    //   console.log('点击了手部');
    //   spineAnimation.state.setAnimation(0, 'wave', false);
    //   spineAnimation.state.addAnimation(0, 'idle', true, 0);
    // }
  });
});
</script>

<style lang="scss" scoped>
.canvasBox {
  margin: 100px 0 0 100px;
}
</style>
