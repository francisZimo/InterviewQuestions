function Walls() {
    PIXI.Container.call(this);

    this.pool = new WallSpritesPool();
    this.createLookupTables();

    // var sprite = this.borrowWallSprite(SliceType.WINDOW);
    // this.addChild(sprite);
    this.slices = []
    this.createTestWallSpan();
    this.addSprite()

}


// Walls.prototype.removeSprite = function () {
//     for (var i = 0; i < this.slices.length; i++) {
//         const item = this.slices[i];
//         this.borrowWallSprite(item.type);

//     }
// }

Walls.prototype = Object.create(PIXI.Container.prototype);



Walls.prototype.addSprite = function () {
    for (var i = 0; i < this.slices.length; i++) {
        const item = this.slices[i];
        console.log(item, '==xx', item)
        var sprite = this.borrowWallSprite(item.type);
        this.returnWallSprite(item.type, sprite)
        sprite.position.x = -32 + (i * item.WIDTH);
        sprite.position.y = item.y;
        console.log(item, '===sprite')
        this.addChild(sprite);
    }
    console.log(this.slices.length, '===this.slices')
}

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



Walls.prototype.addSlice = function (sliceType, y) {
    var slice = new WallSlice(sliceType, y);
    this.slices.push(slice);
};


Walls.prototype.createTestWallSpan = function () {
    this.addSlice(SliceType.FRONT, 192);
    this.addSlice(SliceType.WINDOW, 192);
    this.addSlice(SliceType.DECORATION, 192);
    this.addSlice(SliceType.WINDOW, 192);
    this.addSlice(SliceType.DECORATION, 192);
    this.addSlice(SliceType.WINDOW, 192);
    this.addSlice(SliceType.DECORATION, 192);
    this.addSlice(SliceType.WINDOW, 192);
    this.addSlice(SliceType.BACK, 192);
};