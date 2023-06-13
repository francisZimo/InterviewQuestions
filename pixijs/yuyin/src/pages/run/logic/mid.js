import * as PIXI from 'pixi.js';
export default class Mid {
    constructor() {
        this.midTexture = PIXI.Texture.from('bg-mid');
        this.mid = new PIXI.TilingSprite(this.midTexture, 512, 256);
        this.mid.position.x = 0;
        this.mid.position.y = 128;
        this.mid.tilePosition.x = 0;
        this.mid.tilePosition.y = 0;
    }

    setViewportX(viewportX) {
        this.mid.tilePosition.x = -viewportX * 0.32;
    }

    getSprite() {
        return this.mid;
    }
}