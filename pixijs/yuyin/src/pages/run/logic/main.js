import * as PIXI from 'pixi.js';
import Scroller from './scroll';
import SpineBody from './spine';
export default class Main {
    static SCROLL_SPEED = 5;
    static MAX_SCROLL_SPEED = 15;
    static SCROLL_ACCELERATION = 0.005;

    constructor(dom) {
        const app = new PIXI.Application({
            width: 512,
            height: 384,
            backgroundColor: 'rgba(0,0,0,1)'
        });
        app.stage.interactive = true;
        const container = new PIXI.Container({
            width: 512,
            height: 384,
        });
        container.position.x = 0;
        container.position.y = 0;
        container.interactive = true
        container.sortableChildren = true;
        this.container = container;
        app.stage.addChild(container);

        dom.appendChild(app.view)
        this.app = app;
        this.loadSpriteSheet();


    }

    loadSpriteSheet() {
        var loader = PIXI.Assets;

        loader.add("wall", "assets/resources/wall.json");
        loader.add("bg-mid", "assets/resources/bg-mid.png");
        loader.add("bg-far", "assets/resources/bg-far.png");
        const texturesPromise = PIXI.Assets.load(['wall', 'bg-mid', 'bg-far']);

        texturesPromise.then((loader, resources) => {
            console.log(loader, resources)
            this.spriteSheetLoaded()
        })

    }

    spriteSheetLoaded() {
        console.log('加载完毕')
        const scroller = new Scroller(this.container);
        this.spineBody = new SpineBody(this.container)

        this.app.ticker.add(() => {
            scroller.moveViewportXBy(Main.SCROLL_SPEED);
        })
    }

}