import * as PIXI from 'pixi.js';
import {
    Spine
} from 'pixi-spine';
export default class SpineBody {
    constructor(stage) {
        this.stage = stage;

        console.log(this.stage, '==stage')
        this.init()
    }
    init() {
        const onAssetsLoaded = (spineboyAsset) => {
            // create a spine boy
            const spineBoyPro = new Spine(spineboyAsset.spineData);
            // const spineBoyPro = new PIXI.spine.Spine(spineboyAsset.spineData);

            // set the position
            spineBoyPro.x = 100;
            spineBoyPro.y = 300;

            // 设定层级
            spineBoyPro.zIndex = 100;



            spineBoyPro.state.setAnimation(0, 'run', true);

            spineBoyPro.scale.set(0.3);

            this.stage.addChild(spineBoyPro);

            const singleAnimations = ['aim', 'death', 'jump', 'portal'];
            const loopAnimations = ['hoverboard', 'idle', 'run', 'shoot', 'walk'];
            const allAnimations = [].concat(singleAnimations, loopAnimations);

            let lastAnimation = '';

            // Press the screen to play a random animation
            this.stage.on('pointerdown', () => {
                console.log('===pointerDown')
                let animation = '';
                do {
                    animation = allAnimations[Math.floor(Math.random() * allAnimations.length)];
                } while (animation === lastAnimation);

                spineBoyPro.state.setAnimation(0, animation, loopAnimations.includes(animation));

                lastAnimation = animation;
            });
        }
        PIXI.Assets.load('spine/boy/spineboy-pro.json').then(onAssetsLoaded);
        // PIXI.Assets.load('data/Boy_ShortsShirt_Angry.json').then(onAssetsLoaded);

    }
    // onAssetsLoaded(spineboyAsset) {
    //     console.log('jiazai')

    //     // create a spine boy
    //     const spineBoyPro = new Spine(spineboyAsset.spineData);
    //     // const spineBoyPro = new PIXI.spine.Spine(spineboyAsset.spineData);

    //     // set the position
    //     spineBoyPro.x = 100;
    //     spineBoyPro.y = 100;

    //     spineBoyPro.scale.set(0.5);

    //     this.stage.addChild(spineBoyPro);

    //     const singleAnimations = ['aim', 'death', 'jump', 'portal'];
    //     const loopAnimations = ['hoverboard', 'idle', 'run', 'shoot', 'walk'];
    //     const allAnimations = [].concat(singleAnimations, loopAnimations);

    //     let lastAnimation = '';

    //     // Press the screen to play a random animation
    //     this.stage.on('pointerdown', () => {
    //         let animation = '';
    //         do {
    //             animation = allAnimations[Math.floor(Math.random() * allAnimations.length)];
    //         } while (animation === lastAnimation);

    //         spineBoyPro.state.setAnimation(0, animation, loopAnimations.includes(animation));

    //         lastAnimation = animation;
    //     });
    // }
}