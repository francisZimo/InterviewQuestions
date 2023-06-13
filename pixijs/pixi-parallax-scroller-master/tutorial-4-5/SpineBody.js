class SpineBody extends PIXI.Container {
    constructor() {
        super()
        this.init()
    }
    init() {
        const loader = new PIXI.loaders.Loader();
        loader.add('./pixi-spine/spineboy-pro.json').load(this.onAssetsLoaded);
    }
    onAssetsLoaded(spineboyAsset) {
        console.log('加载成功')
        const spineBoyPro = new PIXI.spine.Spine(spineboyAsset.spineData);
        console.log(spineBoyPro)
        // set the position
        // spineBoyPro.x = app.screen.width / 2;
        // spineBoyPro.y = app.screen.height;

        // spineBoyPro.scale.set(0.5);

        // app.stage.addChild(spineBoyPro);
    }
}