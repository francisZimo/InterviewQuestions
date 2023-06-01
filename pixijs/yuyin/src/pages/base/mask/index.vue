<template>
  <div ref="conDom"></div>
</template>

<script setup lang="ts">
import { Ref, onMounted, ref } from 'vue';
import * as PIXI from 'pixi.js';
const conDom: Ref<HTMLElement | null> = ref(null);

onMounted(() => {
  const app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 'rgba(255,222,111,0.1)'
  });
  if (!conDom.value) return;
  console.log('conDom', app.view);
  conDom.value.appendChild(app.view);

  let text = new PIXI.Text(
    'This text will scroll up and be masked, so you can see how masking works.  Lorem ipsum and all that.\n\n' +
      'You can put anything in the container and it will be masked!',
    {
      fontSize: 24,
      fill: 0x1010ff,
      wordWrap: true,
      wordWrapWidth: 180
    }
  );
  text.x = 10;
  //   app.stage.addChild(text);

  // Create a graphics object to define our mask
  let mask = new PIXI.Graphics();
  // Add the rectangular area to show
  mask.beginFill(0x000000);
  mask.drawRect(0, 0, 200, 200);
  mask.endFill();

  app.stage.addChild(mask);

  // Add container that will hold our masked content
  let maskContainer = new PIXI.Container();
  // Set the mask to use our graphics object from above
  maskContainer.mask = mask;
  //   maskContainer.
  // Add the mask as a child, so that the mask is positioned relative to its parent
  maskContainer.addChild(mask);
  // Offset by the window's frame width
  maskContainer.position.set(4, 4);
  // And add the container to the window!
  app.stage.addChild(maskContainer);

  maskContainer.addChild(text);

  // Add a ticker callback to scroll the text up and down
  let elapsed = 0.0;
  app.ticker.add((delta) => {
    // Update the text's y coordinate to scroll it
    elapsed += delta;
    text.y = 10 + -100.0 + Math.cos(elapsed / 50.0) * 100.0;
  });
});
</script>

<style lang="scss" scoped></style>
