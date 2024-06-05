(function () {
	retryWhileError(function () {
		NAinfo.requireApiVersion(0, 2);

		let vertices = ['A', 'B', 'C', 'H'];

		let paint1 = function (ctx) {

			ctx.lineWidth = 2;
			ctx.strokeStyle = om.secondaryBrandColors;

			//стороны
			ctx.drawLine(10, 370, 390, 370);
			ctx.drawLine(10, 370, 180, 50);
			ctx.drawLine(180, 50, 390, 370);
			//высота
			ctx.drawLine(280, 200, 10, 370);

			ctx.strokeInMiddleOfSegment(180, 50, 10, 370, 10);
			ctx.strokeInMiddleOfSegment(180, 50, 390, 370, 10);

			ctx.arcBetweenSegments([180, 50, 280, 200, 280, 200, 10, 370], 25);

			ctx.font = "23px liberation_sans";
			ctx.fillText(vertices[0], 10 - 5, 370 + 25);
			ctx.fillText(vertices[1], 180, 50 - 10);
			ctx.fillText(vertices[2], 390 - 10, 370 + 25);
			ctx.fillText(vertices[3], ver2.x + 10, ver2.y);
		};

		NAtask.setTask({
			text: 'В треугольнике ABC AC=BC, AB=15, AH - высота, BH=5. Найдите косинус BАC.',
			answers: 0,
			author: ['Суматохина Александра']
		});
		NAtask.modifiers.variativeABC(vertices);
		NAtask.modifiers.addCanvasIllustration({
			width: 400,
			height: 400,
			paint: paint1,
		});
	}, 1000);
})();
