<template>
  <div class="canvasBox" ref="conDom"></div>
</template>

<script setup lang="ts">
import { Ref, onMounted, ref } from 'vue';
import * as PIXI from 'pixi.js';
import { Spine } from 'pixi-spine';
const conDom: Ref<HTMLElement | null> = ref(null);

onMounted(() => {
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
  let spinePosition = { x: 200, y: 200, hotAreaExtend: 0, scale: 1 }; //  hotAreaExtend 热区扩展边距
  // PIXI.Assets.load('data/goblins-ess.json').then(onAssetsLoaded2);
  PIXI.Assets.load('data/fanjiang-mkf.json').then(onAssetsLoaded2);
  // PIXI.Assets.load('data/kapibala.json').then(onAssetsLoaded2);
  function onAssetsLoaded2(dragonAsset) {
    const person = new Spine(dragonAsset.spineData);
    person.position.set(spinePosition.x, spinePosition.y);
    person.scale.set(spinePosition.scale);
    console.log('person:', person, person.state);
    personSpine = person;
    app.stage.addChild(person);
    // 麦克风动画名 1，2，3，4，5，6，7，8
    person.state.setAnimation(0, '8', true); // idle show walk
    // PIXI.Assets.load('https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg').then((res) => {
    //   person.hackTextureBySlotName('toufa_1', res);
    // });

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
  function isHitSlot(slot, pointer) {
    if (!slot || !pointer) {
      console.error('参数无效');
      return false;
    }
    if (slot.bone && slot.attachment) {
      const attachmentInfo = slot.attachment;
      const boneInfo = slot.bone;

      // 考虑到骨骼的缩放
      const attachmentWorldBounds = {
        width: attachmentInfo.width * attachmentInfo.scaleX * spinePosition.scale,
        height: attachmentInfo.height * attachmentInfo.scaleY * spinePosition.scale,
        x:
          spinePosition.x +
          (boneInfo.worldX + attachmentInfo.x - (attachmentInfo.width * attachmentInfo.scaleX) / 2) *
            spinePosition.scale,
        y:
          spinePosition.y +
          (boneInfo.worldY + attachmentInfo.y - (attachmentInfo.height * attachmentInfo.scaleY) / 2) *
            spinePosition.scale
      };
      console.log('attachmentWorldBounds:', attachmentWorldBounds);
      const polygonBounds = makePolygon(attachmentWorldBounds);
      return isPointInPolygon(pointer, polygonBounds);
      // if (isPointInPolygon(pointer, polygonBounds)) {
      //   console.log('✅');
      //   alert('点击对');
      //   personSpine.state.setAnimation(0, '4', false);
      // }
    }
    return false;
  }

  app.stage.interactive = true;
  app.stage.on('pointerdown', (e) => {
    console.log('e.data.global:', e.data.global, '');
    // personSpine.position.set(e.data.global.x, e.data.global.y);
    // 输出所有的骨骼
    // console.log(personSpine.skeleton.bones, '===personSpine.skeleton.bones');
    // // 输出所有的插槽
    // console.log(personSpine.skeleton.slots, '===personSpine.skeleton.slots');
    // // 输出所有的皮肤
    // console.log(personSpine.skeleton.data.skins, '===personSpine.skeleton.data.skins');
    // // 输出所有的动画
    // console.log(personSpine.state.data.skeletonData.animations, '===personSpine.state.data.skeletonData.animations');
    // // 输出所有的插槽
    // console.log(personSpine.skeleton.slots, '===personSpine.skeleton.slots');
    // const totalSlots = personSpine.skeleton.slots;
    // console.log('totalSlots', totalSlots);
    // if (totalSlots) {
    //   totalSlots.forEach((slot) => {
    //     console.log('slotName', slot?.data?.name);
    //   });
    // }
    // 身体名称 shenti_1
    // 检测是否点击到身体骨骼
    const mousePosition = e.data.global;

    // const bodyBone = personSpine.spineData.findBone('shenti_1');
    // console.log('mousePosition', mousePosition);
    // console.log('bodyBone', bodyBone);

    // if (bodyBone && personSpine.containsPoint(bodyBone, mousePosition.x, mousePosition.y)) {
    //   console.log('点击了身体');
    //   // personSpine.state.setAnimation(0, 'walk', true);
    // }

    // 身体插槽名称 shenti_1
    // 检测是否点击到身体插槽
    const slotSubmit = personSpine.skeleton.findSlot('dui2');
    const slotCancel = personSpine.skeleton.findSlot('x2');

    // youjiao
    // const slotSubmit = personSpine.skeleton.findSlot('toufa_1');
    // const slotCancel = personSpine.skeleton.findSlot('zuojiao_1');

    const bounds = personSpine.getBounds();
    console.log('bounds:', bounds);
    console.log('spine:', personSpine);

    if (isHitSlot(slotSubmit, mousePosition)) {
      console.log('点击了右');
      alert('点击了右');
      // personSpine.state.setAnimation(0, '4', false);
      return;
    }

    if (isHitSlot(slotCancel, mousePosition)) {
      console.log('点击了左');
      alert('点击了左');
      // personSpine.state.setAnimation(0, '6', false);
      return;
    }

    // if (slot.bone && slot.attachment) {
    //   const attachmentInfo = slot.attachment; // x y width height
    //   const boneInfo = slot.bone; // x y
    //   const attachmentWorldBounds = {
    //     x: spinePosition.x + boneInfo.worldX + attachmentInfo.x - attachmentInfo.width / 2,
    //     y: spinePosition.y + boneInfo.worldY + attachmentInfo.y - attachmentInfo.height / 2,
    //     width: attachmentInfo.width,
    //     height: attachmentInfo.height
    //   };
    //   const polygonBounds = makePolygon(attachmentWorldBounds);
    //   if (isPointInPolygon(mousePosition, polygonBounds)) {
    //     console.log('✅');
    //     alert('点击对');
    //     personSpine.state.setAnimation(0, '4', false);
    //   }
    // }

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
