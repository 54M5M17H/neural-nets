class Perceptron {
	constructor(xW, yW, bW) {
		this.xW = xW;
		this.yW = yW;
		this.bW = bW;
		this.learningRate = 0.01;
	}
	
	makeGuess(P, truth) {
		const wSum = (P.x * this.xW) + (P.y * this.yW) + this.bW;
		const activation =  wSum > 0 ? 1 : -1;
		const error = truth - activation;
		P.draw(!error);

		// Normalise weight adjustments
		this.xW += (P.x/canvasData.scaleX * error) * this.learningRate;
		this.yW += (P.y/canvasData.scaleY * error) * this.learningRate;
		this.bW += error * this.learningRate;
	}

	guessLine() {
		perceptronContext.beginPath();
		perceptronContext.strokeStyle = 'orange';
		perceptronContext.strokeWidth = 10;

		const f = (x) => ((- this.xW / this.yW) * x) + (-this.bW / this.yW);

		const startY = f(0 - canvasData.scaleX);
		const startYPx = canvasData.pxHeight - (((startY + canvasData.scaleY) / (canvasData.scaleY * 2)) * canvasData.pxHeight);
		perceptronContext.moveTo(0, startYPx);

		const endY = f(canvasData.scaleX);
		const endYPx = canvasData.pxHeight - (((endY + canvasData.scaleY) / (canvasData.scaleY * 2)) * canvasData.pxHeight);

		perceptronContext.lineTo(canvasData.pxWidth, endYPx);
		perceptronContext.stroke();
	}

}
