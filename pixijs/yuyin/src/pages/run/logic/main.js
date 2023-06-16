import * as PIXI from 'pixi.js';
import Scroller from './scroll';
import SpineBody from './spine';
import Score from './score'
class Main {

    static SCROLL_SPEED = 5;
    static MAX_SCROLL_SPEED = 15;
    static SCROLL_ACCELERATION = 0.005;

    constructor(dom) {
        const app = new PIXI.Application({
            width: 512,
            height: 384,
            backgroundColor: 'rgba(0,0,0,1)'
        });
        this.app = app;
        app.stage.interactive = true;
        const gameContainer = new PIXI.Container({
            width: 512,
            height: 384,
        });
        this.bullets = []
        this.score = 0; // 分数
        gameContainer.position.x = 0;
        gameContainer.position.y = 0;
        gameContainer.interactive = true
        gameContainer.sortableChildren = true;
        this.gameContainer = gameContainer;
        app.stage.addChild(gameContainer);
        dom.appendChild(app.view)
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
        const scroller = new Scroller(this.gameContainer);
        this.spineBody = new SpineBody(this.gameContainer, this.app)
        this.scoreBoard = new Score(this.app)
        this.app.ticker.add(() => {
            scroller.moveViewportXBy(Main.SCROLL_SPEED);
            this.scoreBoard.updateScore(this.score)
        })
    }

}

function createGame() {
    let game;
    return (dom = document.body) => {
        if (!game) {
            game = new Main(dom)
        }
        return game
    }
}

export default createGame()