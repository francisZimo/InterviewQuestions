function Main() {
	this.stage = new PIXI.Container();
	this.renderer = PIXI.autoDetectRenderer(
		512,
		384, {
			view: document.getElementById("game-canvas")
		}
	);

	this.scroller = new Scroller(this.stage);
	console.log(this.scroller.getViewportX(), '===ccc')
	setInterval(() => {
		console.log(this.scroller.getViewportX(), '===ccc1')
	}, 1000);

	requestAnimationFrame(this.update.bind(this));
}

Main.SCROLL_SPEED = 5;

Main.prototype.update = function () {
	this.scroller.moveViewportXBy(Main.SCROLL_SPEED);
	this.renderer.render(this.stage);
	requestAnimationFrame(this.update.bind(this));
};