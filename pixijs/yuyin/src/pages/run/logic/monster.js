import monsterImg from './spine/monster.jpg'
import * as PIXI from 'pixi.js'

function boxesIntersect(a, b) {
    var ab = a.getBounds();
    var bb = b.getBounds();
    return ab.x + ab.width > bb.x && ab.x < bb.x + bb.width && ab.y + ab.height > bb.y && ab.y < bb.y + bb.height;
}
import Main from './main'
export default class Monster {
    constructor(stage) {
        this.stage = stage

        this.monster = null
        this.init()
        this.watch()


    }
    init() {
        const monsterTxt = PIXI.Texture.from(monsterImg);
        const monster = new PIXI.Sprite(monsterTxt);
        monster.scale.set(0.2);
        monster.anchor.set(0.5);
        monster.x = 300 + (Math.random() * 100 > 50 ? 1 : -1) * (Math.random() * 200);
        monster.y = 100 + (Math.random() * 100 > 50 ? 1 : -1) * (Math.random() * 200);
        monster.zIndex = 50
        this.monster = monster
        this.stage.addChild(monster);
    }
    watch() {
        const listener = () => {
            const game = Main()
            const bullets = game.bullets
            for (let i = 0; i < bullets.length; i++) {
                const bullet = bullets[i];
                const isHit = boxesIntersect(bullet, this.monster)
                if (isHit) {
                    this.stage.removeChild(this.monster)
                    this.stage.removeChild(bullet)
                    game.bullets.splice(i, 1)
                    game.score++
                    return
                }
            }
            requestAnimationFrame(listener)
        }
        listener()

    }

}