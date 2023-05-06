class BrakeBanner {
	constructor(selector) {
		this.app = new PIXI.Application({
			width: window.innerWidth,
			height: window.innerHeight,
			backgroundColor: 0x061639,
		})

		document.querySelector(selector).appendChild(this.app.view);
		// console.log(PIXI.loader, '==loader')
		// this.loader = PIXI.loader


		// this.loader.add("btn.png", "images/btn.png")
		// this.loader.load(() => {
		// 	console.log('load')
		// })

		// this.loader.onComplete.add(() => {
		// 	let btn = new PIXI.Sprite(this.loader.resources["btn.png"].texture)
		// 	console.log(btn, '==btn')
		// 	this.app.stage.addChild(btn)
		// 	console.log('wancehng')
		// })
	}
}