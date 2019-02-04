function start() {
	const m = document.querySelector('#m').value;
	const c = document.querySelector('#c').value;

	if (m === 0) {
		alert('m cannot be 0. There is no such gradient.');
		return;
	} else if (!m) {
		alert('Provide a value for both fields');
		return;
	} else if (!c && c != 0) {
		alert('Provide a value for both fields');
		return;
	}

	canvasSetup(context);
	const perceptron = new Perceptron(1, 1, 1);
	const line = new Line(+m, +c);
	line.draw();
	
	const pointLimit = 10000;
	for (let i = 0; i < pointLimit; i++) {
		setTimeout(() => {
			perceptronContext.clearRect(0, 0, canvasData.pxWidth, canvasData.pxHeight);
			let point = new Point();
			const truth = line.aboveOrBelow(point);
			perceptron.makeGuess(point, truth);
			perceptron.guessLine();

			if (i === pointLimit - 1) {
				console.log((- perceptron.xW / perceptron.yW), (-perceptron.bW / perceptron.yW));
				console.log(perceptron);
			}
		}, i * 1);
	}
}




