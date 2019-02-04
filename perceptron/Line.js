class Line {
	constructor(m, c) {
		this.m = m;
		this.c = c;
	}

	aboveOrBelow(P) {
		return this.f(P.x) < P.y ? 1 : -1;
	}

	f(x) {
		return (x * this.m) + this.c;
	}

	draw(colour) {
		context.beginPath();
		context.strokeStyle = colour || 'blue';

		const startY = this.f(0 - canvasData.scaleX);
		const startYPx = canvasData.pxHeight - (((startY + canvasData.scaleY) / (canvasData.scaleY * 2)) * canvasData.pxHeight);
		context.moveTo(0, startYPx);

		const endY = this.f(canvasData.scaleX);
		const endYPx = canvasData.pxHeight - (((endY + canvasData.scaleY) / (canvasData.scaleY * 2)) * canvasData.pxHeight);

		context.lineTo(canvasData.pxWidth, endYPx);
		context.stroke();
	}
}