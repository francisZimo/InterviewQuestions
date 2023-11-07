<template>
  <div ref="conDom"></div>
</template>

<script setup lang="ts">
import { ref, Ref, onMounted } from 'vue';
import * as PIXI from 'pixi.js';
import hitTestRectangle from './utils/hitTestRectangle';

const conDom: Ref<HTMLDivElement | null> = ref(null);
// 游戏得分
const score = ref(0);
let dinoUpdate = false; // 恐龙升级
let jumpVelocity = 20; //跳跃速度
let gravity = 1;
let isGameOver = false;
let clearTimer = 0;

onMounted(() => {
  let isGaming = false;
  let isJumping = false;
  const app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0xffffff
  });

  if (!conDom.value) return;
  conDom.value.appendChild(app.view);

  const container = new PIXI.Container();
  app.stage.addChild(container);

  // 添加恐龙游戏精灵纹理
  const baseTexture = PIXI.BaseTexture.from('/assets/game.png');
  // 恐龙纹理
  const dragonTexture = new PIXI.Texture(baseTexture, new PIXI.Rectangle(75, 0, 88, 100));
  const dragon = new PIXI.Sprite(dragonTexture);
  dragon.visible = false;
  container.addChild(dragon);

  //恐龙跑步动画
  const runTexture = [];
  for (let i = 0; i < 2; i++) {
    const tmp = new PIXI.Texture(baseTexture, new PIXI.Rectangle(1680 + (2 + i) * 88, 0, 82, 100));
    runTexture.push(tmp);
  }
  const runAnimation = new PIXI.AnimatedSprite(runTexture);
  runAnimation.animationSpeed = 0.1;
  runAnimation.play();
  runAnimation.visible = false;

  container.addChild(runAnimation);

  // 恐龙跳跃
  const jumpTexture = new PIXI.Texture(baseTexture, new PIXI.Rectangle(1680, 0, 82, 100));
  const jumpSprite = new PIXI.Sprite(jumpTexture);
  jumpSprite.x = 60;
  jumpSprite.y = app.screen.height - 100 - 80;
  jumpSprite.visible = false;
  container.addChild(jumpSprite);

  // 恐龙飞奔
  const speedRunTexture = [];
  for (let i = 0; i < 2; i++) {
    const tmp = new PIXI.Texture(baseTexture, new PIXI.Rectangle(2210 + i * 110, 0, 115, 100));
    speedRunTexture.push(tmp);
  }
  const speedrunAnimation = new PIXI.AnimatedSprite(speedRunTexture);
  speedrunAnimation.animationSpeed = 0.1;
  speedrunAnimation.play();
  speedrunAnimation.x = 60;
  speedrunAnimation.y = app.screen.height - 100 - 80;
  speedrunAnimation.visible = false;
  container.addChild(speedrunAnimation);

  // 创建飞龙
  const flyTexture = [];
  for (let i = 0; i < 2; i++) {
    const tmp = new PIXI.Texture(baseTexture, new PIXI.Rectangle(263 + i * 91, 0, 91, 80));
    flyTexture.push(tmp);
  }
  const flyAnimation = new PIXI.AnimatedSprite(flyTexture);
  flyAnimation.animationSpeed = 0.1;
  flyAnimation.play();
  flyAnimation.x = app.screen.width;
  flyAnimation.y = app.screen.height - 500;
  container.addChild(flyAnimation);

  // 创建地面精灵
  const groundTexture = new PIXI.Texture(baseTexture, new PIXI.Rectangle(50, 100, 2300, 30));
  const groundSprite = new PIXI.TilingSprite(groundTexture);
  groundSprite.width = app.screen.width;
  groundSprite.height = 30;
  groundSprite.position.set(0, app.screen.height - 100);
  container.addChild(groundSprite);

  // 创建仙人掌
  const cactusTexture = new PIXI.Texture(baseTexture, new PIXI.Rectangle(515, 0, 30, 60));
  const cactusSprite = new PIXI.Sprite(cactusTexture);
  cactusSprite.x = app.screen.width / 2;
  cactusSprite.y = app.screen.height - 100 - 60;
  container.addChild(cactusSprite);

  // 创建文字
  let startText = new PIXI.Text('开始游戏', {
    fontSize: 30,
    fill: 0x333,
    align: 'center'
  });
  startText.x = app.screen.width / 2;
  startText.y = app.screen.height / 2;
  startText.anchor.set(0.5);
  container.addChild(startText);
  startText.interactive = true;
  startText.on('click', () => {
    playGame();
  });

  // 创建文字
  let endText = new PIXI.Text('最终得分' + score.value, {
    fontSize: 30,
    fill: 0x333,
    align: 'center'
  });
  endText.x = app.screen.width / 2;
  endText.y = app.screen.height / 2;
  endText.anchor.set(0.5);
  container.addChild(endText);
  endText.interactive = true;
  endText.visible = false;
  endText.on('click', () => {
    location.reload();
  });
  function playGame() {
    isGaming = true;
    // 显示恐龙跑步动画
    startText.visible = false;
    runAnimation.visible = true;
    runAnimation.x = 60;
    runAnimation.y = app.screen.height - 100 - 80;
  }

  // 游戏循环
  app.ticker.add((delta) => {
    if (isGameOver) return;
    if (isGaming) {
      let speed = dinoUpdate ? 2 : 1;

      // 地面移动
      groundSprite.tilePosition.x -= 5 * speed;
      // 仙人掌移动
      cactusSprite.x -= 5 * speed;
      if (cactusSprite.x < -30) {
        cactusSprite.x = app.screen.width;
        score.value++;
      }
      // 飞龙移动
      flyAnimation.x -= 7 * speed;
      if (flyAnimation.x < -30) {
        flyAnimation.x = app.screen.width;
        flyAnimation.visible = true;
      }
    }
    if (jumpSprite.visible) {
      jumpVelocity -= gravity;
      jumpSprite.y -= jumpVelocity;
      // 下降触底
      if (jumpSprite.y > app.screen.height - 100 - 80) {
        jumpSprite.y = app.screen.height - 100 - 80;
        jumpVelocity = 20;
        jumpSprite.visible = false;
        if (dinoUpdate) {
          speedrunAnimation.visible = true;
        } else {
          runAnimation.visible = true;
        }
      }
    }

    // 碰撞检测
    if (hitTestRectangle(jumpSprite, cactusSprite) && !dinoUpdate) {
      gameOver();
    }

    // 恐龙与飞鸟碰撞检测
    if (hitTestRectangle(jumpSprite, flyAnimation)) {
      dinoUpdate = true;
      flyAnimation.visible = false;
      clearTimeout(clearTimer);
      clearTimer = setTimeout(() => {
        dinoUpdate = false;
        speedrunAnimation.visible = false;
        if (!jumpSprite.visible) {
          runAnimation.visible = true;
        }
      }, 5000);
    }
  });

  // 结束游戏
  function gameOver() {
    isGameOver = true;
    endText.visible = true;
    endText.text = `最终得分${score.value}`;
  }

  window.addEventListener('keydown', (e) => {
    if (!isGaming) return;
    if (e.code === 'Space') {
      if (dinoUpdate) {
        speedrunAnimation.visible = false;
      } else {
        runAnimation.visible = false;
      }
      jumpSprite.visible = true;
      jumpVelocity = 20;
    }
  });
});
</script>

<style lang="scss" scoped></style>
