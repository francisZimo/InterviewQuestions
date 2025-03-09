import * as PIXI from 'pixi.js';
import { Spine } from 'pixi-spine';
import Monster from '../monster';
import carrot from './carrot.png';
import Main from '../main';
export default class SpineBody {
  constructor(stage, app) {
    this.stage = stage;
    this.app = app;
    this.game = Main();
    this.init();
    this.shootFlag = false;
    this.runTimer = 0;
    this.pointerup = null;
    this.rotation = 0;
  }
  init() {
    const onAssetsLoaded = (spineboyAsset) => {
      let rectangle = new PIXI.Graphics();
      rectangle.lineStyle(4, 0xff3300, 1);
      rectangle.beginFill(0x66ccff);
      rectangle.drawRect(0, 0, 4, 4);
      rectangle.endFill();
      rectangle.x = 150;
      rectangle.y = 200;
      rectangle.zIndex = 1000;
      this.stage.addChild(rectangle);

      // create a spine boy
      const spineBoyPro = new Spine(spineboyAsset.spineData);
      spineBoyPro.x = 150;
      spineBoyPro.y = 300;

      // 设定层级
      spineBoyPro.zIndex = 100;

      spineBoyPro.state.setAnimation(0, 'run', true);

      spineBoyPro.scale.set(0.3);

      this.stage.addChild(spineBoyPro);

      const singleAnimations = ['aim', 'death', 'jump', 'portal'];
      const loopAnimations = ['hoverboard', 'idle', 'run', 'shoot', 'walk'];
      const allAnimations = [].concat(singleAnimations, loopAnimations);

      let lastAnimation = '';
      spineBoyPro.state.setAnimation(0, 'run', true);
      // spineBoyPro.state.setAnimation(0, 'walk', true);
      // Press the screen to play a random animation

      var bullets = [];
      var bulletSpeed = 5;
      // 子弹
      var bulletTxt = PIXI.Texture.from(carrot);

      function shoot(rotation, startPosition) {
        var bullet = new PIXI.Sprite(bulletTxt);
        bullet.zIndex = 99;
        bullet.position.x = startPosition.x;
        bullet.position.y = startPosition.y - 100;
        bullet.rotation = rotation;
        this.stage.addChild(bullet);
        bullets.push(bullet);
        console.log('shoot');
        this.game.bullets.push(bullet);
      }

      function rotateToPoint(mx, my, px, py) {
        var dist_Y = my - py;
        var dist_X = mx - px;
        var angle = Math.atan2(dist_Y, dist_X);
        var degrees = (angle * 180) / Math.PI;
        return angle;
      }

      this.stage.on('mousedown', (e) => {
        console.log('mouseDown', e);
        const x = e.client.x;
        const y = e.client.y;
        console.log(x, y, 'hah');
        const rotation = rotateToPoint(x, y, spineBoyPro.position.x, spineBoyPro.position.y);

        shoot.bind(this, rotation, {
          x: spineBoyPro.position.x + Math.cos(rotation) * 20,
          y: spineBoyPro.position.y + Math.sin(rotation) * 20
        })();
      });

      this.stage.on('pointerdown', () => {
        this.shootFlag = true;
        spineBoyPro.state.setAnimation(0, 'shoot', false);
        clearTimeout(this.pointerup);
      });

      this.stage.on('pointerup', () => {
        this.pointerup = setTimeout(() => {
          spineBoyPro.state.setAnimation(0, 'run', true);
        }, 300);
      });
      window.addEventListener('keydown', (e) => {
        if (e.code === 'Space') {
          spineBoyPro.state.setAnimation(0, 'jump', false);
        }
      });
      let timer = 0;
      window.addEventListener('keyup', (e) => {
        timer && clearTimeout(timer);
        if (e.code === 'Space') {
          timer = setTimeout(() => {
            spineBoyPro.state.setAnimation(0, 'run', true);
          }, 1000);
        }
      });

      const animate = () => {
        // console.log('cccxx')
        requestAnimationFrame(animate);

        // spineBoyPro.rotation = rotateToPoint(renderer.plugins.interaction.mouse.global.x, renderer.plugins.interaction.mouse.global.y, bunny.position.x, bunny.position.y);
        for (var b = bullets.length - 1; b >= 0; b--) {
          bullets[b].position.x += Math.cos(bullets[b].rotation) * bulletSpeed;
          bullets[b].position.y += Math.sin(bullets[b].rotation) * bulletSpeed;
        }

        // 渲染容器
        this.app.render(this.stage);
      };
      animate();
    };
    this.addMonster();
    PIXI.Assets.load('spine/boy/spineboy-pro.json').then(onAssetsLoaded);
  }

  addMonster() {
    const showMonster = () => {
      for (let i = 0; i < 4; i++) {
        new Monster(this.stage);
      }
      this.app.render(this.stage);
      setTimeout(() => {
        showMonster();
      }, 3000);
    };

    showMonster();
  }

  checkCollision() {}
}
