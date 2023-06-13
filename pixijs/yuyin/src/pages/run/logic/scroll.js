import Far from './far';
import Mid from './mid'
import Wall from './wall'
import MapBuilder from './mapBuilder'
export default class Scroller {
    constructor(stage) {
        this.far = new Far();
        const farSprite = this.far.getSprite();

        // stage.addChild(this.far.getSprite());
        stage.addChild(farSprite)

        this.mid = new Mid();
        const midSprite = this.mid.getSprite();

        // stage.addChild(this.mid.getSprite());
        stage.addChild(midSprite)


        this.front = new Wall(stage);
        this.mapBuilder = new MapBuilder(this.front);

        this.viewportX = 0;
    }
    moveViewportXBy(units) {
        this.viewportX += units;
        this.far.setViewportX(this.viewportX);
        this.mid.setViewportX(this.viewportX);
        this.front.setViewportX(this.viewportX);
    }
}