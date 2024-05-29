(function () {
	retryWhileError(function () {
		NAinfo.requireApiVersion(0, 2);

		let paint1 = function (ctx) {
		};

		NAtask.setTask({
			text: 'Объем параллелепипеда ABCDA_1B_1C_1D_1 равен 9. Найдите объем треугольной пирамиды ABCA_1.',
			answers: 0,
			author: ['Суматохина Александра']
		});
		NAtask.modifiers.addCanvasIllustration({
			width: 400,
			height: 400,
			paint: paint1,
		});
	}, 100000);
})();
