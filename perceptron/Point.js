class Point {
	constructor(x, y) {
		this.x = x || Math.random() * (2 * canvasData.scaleX) - canvasData.scaleX;
		this.y = y || Math.random() * (2 * canvasData.scaleY) - canvasData.scaleY;
	}

	draw(correct) {
		context.beginPath();
		const xPx = (((this.x + canvasData.scaleX) / (canvasData.scaleX * 2)) * canvasData.pxWidth);
		const yPx = canvasData.pxHeight - (((this.y + canvasData.scaleY) / (canvasData.scaleY * 2)) * canvasData.pxHeight);
		context.arc(xPx, yPx, 5, 0, 2*Math.PI);
		context.fillStyle = correct ? 'lightgreen' : 'red';
		context.fill();
		context.stroke();
	}
}