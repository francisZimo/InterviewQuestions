import * as PIXI from 'pixi.js';
import Main from './main'
export default class Score {
    constructor(app) {
        this.score = 0

        this.scoreText = null;
        this.app = app
        console.log(this.app, 'this.app')

        this.init()
    }
    init() {
        let endText = new PIXI.Text('得分' + this.score, {
            fontSize: 30,
            fill: 0x333,
            align: 'center'
        });
        endText.x = 0;
        endText.y = 0
        // endText.anchor.set(0.5);
        this.scoreText = endText;
        this.app.stage.addChild(endText);
    }
    updateScore(score) {
        this.scoreText.text = `得分${score}`
    }

}