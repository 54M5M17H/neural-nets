const canvasData = {
	pxWidth: 600,
	pxHeight: 600,
	scaleX: 100, // -100 --> +100
	scaleY: 100  // -100 --> +100
}

const drawAxis = context => {
	context.beginPath();
	context.moveTo(canvasData.pxWidth / 2, 0);
	context.lineTo(canvasData.pxWidth / 2, canvasData.pxHeight);
	context.stroke()

	context.beginPath();
	context.moveTo(0, canvasData.pxHeight / 2);
	context.lineTo(canvasData.pxWidth, canvasData.pxHeight / 2);
	context.stroke()
}

const canvasSetup = context => {
	perceptronContext.clearRect(0, 0, canvasData.pxWidth, canvasData.pxHeight);
	context.fillStyle = 'white';
	context.fillRect(0, 0, canvasData.pxWidth, canvasData.pxHeight);
	// drawBorder(context);
	drawAxis(context);
}



const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');

const perceptronCanvas = document.querySelector('#perceptronCanvas');
const perceptronContext = perceptronCanvas.getContext('2d');
