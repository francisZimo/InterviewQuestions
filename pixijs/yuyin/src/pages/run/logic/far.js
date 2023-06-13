import * as PIXI from 'pixi.js';
export default class Far {
    constructor() {
        this.farTexture = PIXI.Texture.from('bg-far');
        this.far = new PIXI.TilingSprite(this.farTexture, 512, 256);
        this.far.position.x = 0;
        this.far.position.y = 0;
        this.far.tilePosition.x = 0;
        this.far.tilePosition.y = 0;
    }

    setViewportX(viewportX) {
        this.far.tilePosition.x = -viewportX * 0.128;
    }

    getSprite() {
        return this.far;
    }
}