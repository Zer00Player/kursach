(function () {
	retryWhileError(function () {
		NAinfo.requireApiVersion(0, 2);

		let paint1 = function (ctx) {
		};

		NAtask.setTask({
			text: 'В треугольнике ABC AC=BC, AB=15, AH - высота, BH=5. Найдите косинус BАC.',
			answers: 0,
			author: ['Суматохина Александра']
		});
		NAtask.modifiers.addCanvasIllustration({
			width: 400,
			height: 400,
			paint: paint1,
		});
	}, 1000);
})();
