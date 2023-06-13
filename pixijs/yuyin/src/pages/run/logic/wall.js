import WallSpritesPool from './wallSpritesPool'
import * as PIXI from 'pixi.js'
import WallSlice from './wallSlice'
import SliceType from './sliceType';

export default function Walls(stage) {
    this.stage = stage;
    this.pool = new WallSpritesPool();
    this.slices = [];
    this.createLookupTables();
    this.viewportX = 0;
    this.viewportSliceX = 0;
    console.log('this.slices', this.slices)
}

Walls.prototype = Object.create(PIXI.Container.prototype);

Walls.VIEWPORT_WIDTH = 512;
Walls.VIEWPORT_NUM_SLICES = Math.ceil(Walls.VIEWPORT_WIDTH / WallSlice.WIDTH) + 1;

Walls.prototype.setViewportX = function (viewportX) {

    this.viewportX = this.checkViewportXBounds(viewportX);

    // 上一次的视口切片索引
    var prevViewportSliceX = this.viewportSliceX;
    // 当前的视口切片索引
    this.viewportSliceX = Math.floor(this.viewportX / WallSlice.WIDTH);

    this.removeOldSlices(prevViewportSliceX);
    this.addNewSlices();
};

// 超过一屏 回收对象池
Walls.prototype.removeOldSlices = function (prevViewportSliceX) {
    var numOldSlices = this.viewportSliceX - prevViewportSliceX;
    if (numOldSlices > Walls.VIEWPORT_NUM_SLICES) {
        numOldSlices = Walls.VIEWPORT_NUM_SLICES;
    }

    for (var i = prevViewportSliceX; i < prevViewportSliceX + numOldSlices; i++) {
        var slice = this.slices[i];
        if (slice.sprite != null) {
            this.returnWallSprite(slice.type, slice.sprite);
            this.stage.removeChild(slice.sprite);
            slice.sprite = null;
        }
    }
};

Walls.prototype.addSlice = function (sliceType, y) {
    var slice = new WallSlice(sliceType, y);
    this.slices.push(slice);
};

// 检测边界，如果到达终点则停止
Walls.prototype.checkViewportXBounds = function (viewportX) {
    var maxViewportX = (this.slices.length - Walls.VIEWPORT_NUM_SLICES) *
        WallSlice.WIDTH;
    if (viewportX < 0) {
        viewportX = 0;
    } else if (viewportX > maxViewportX) {
        viewportX = maxViewportX;
    }

    return viewportX;
};

// 从对象池中借出墙壁精灵
Walls.prototype.addNewSlices = function () {
    var firstX = -(this.viewportX % WallSlice.WIDTH);
    // 生成新的切片 当前视口切片索引 + 视口切片数量
    for (var i = this.viewportSliceX, sliceIndex = 0; i < this.viewportSliceX + Walls.VIEWPORT_NUM_SLICES; i++, sliceIndex++) {
        var slice = this.slices[i];
        if (slice.sprite == null && slice.type != SliceType.GAP) {
            slice.sprite = this.borrowWallSprite(slice.type);

            slice.sprite.position.x = firstX + (sliceIndex * WallSlice.WIDTH);
            slice.sprite.position.y = slice.y;

            this.stage.addChild(slice.sprite);
        } else if (slice.sprite != null) {
            slice.sprite.position.x = firstX + (sliceIndex * WallSlice.WIDTH);
        }
    }
};

Walls.prototype.createLookupTables = function () {
    this.borrowWallSpriteLookup = [];
    this.borrowWallSpriteLookup[SliceType.FRONT] = this.pool.borrowFrontEdge;
    this.borrowWallSpriteLookup[SliceType.BACK] = this.pool.borrowBackEdge;
    this.borrowWallSpriteLookup[SliceType.STEP] = this.pool.borrowStep;
    this.borrowWallSpriteLookup[SliceType.DECORATION] = this.pool.borrowDecoration;
    this.borrowWallSpriteLookup[SliceType.WINDOW] = this.pool.borrowWindow;

    this.returnWallSpriteLookup = [];
    this.returnWallSpriteLookup[SliceType.FRONT] = this.pool.returnFrontEdge;
    this.returnWallSpriteLookup[SliceType.BACK] = this.pool.returnBackEdge;
    this.returnWallSpriteLookup[SliceType.STEP] = this.pool.returnStep;
    this.returnWallSpriteLookup[SliceType.DECORATION] = this.pool.returnDecoration;
    this.returnWallSpriteLookup[SliceType.WINDOW] = this.pool.returnWindow;
};

Walls.prototype.borrowWallSprite = function (sliceType) {
    return this.borrowWallSpriteLookup[sliceType].call(this.pool);
};

Walls.prototype.returnWallSprite = function (sliceType, sliceSprite) {
    return this.returnWallSpriteLookup[sliceType].call(this.pool, sliceSprite);
};