(function () {
	retryWhileError(function () {
		NAinfo.requireApiVersion(0, 2);

		let paint1 = function (ctx) {

			ctx.lineWidth = 2;
			ctx.strokeStyle = om.secondaryBrandColors;

			//стороны
			ctx.drawLine(10, 370, 390, 370);
			ctx.drawLine(10, 370, 180, 50);
			ctx.drawLine(180, 50, 390, 370);
			//высота
			ctx.drawLine(280, 200, 10, 370);
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
