(function () {
	'use strict';
	retryWhileError(function () {
		NAinfo.requireApiVersion(0, 2);

		let borders = sl1() ? [-1, 0] : [0, 1];
		let [left, right] = borders;

		let outsideLeft = left - 0.5;
		let outsideRight = right + 0.5;
		let pointA = slKrome((x) => (x-x.round()).abs() < 0.1, outsideLeft, outsideRight, 0.01);

		let paint1 = function (ct) {
			coordAxis_drawAuto(ct, { points: [
				// Нолик и плюс-минус единичка с чёрточками!
				{ value: borders[0], mark: "line", labelPos: "underAxis",  label: borders[0] },
				{ value: borders[1], mark: "line", labelPos: "underAxis",  label: borders[1] },
				// Сама точка a
				{ value: pointA, mark: "dot", labelPos: "overAxis",   label: "a"  },
				// И немного разбавляем края для вариативности
				{ value: borders[0] - sl(0.1,0.5,0.01), mark: "nothing" },
				{ value: borders[1] + sl(0.1,0.5,0.01), mark: "nothing" },
			] });
		};

		let pointA2 = pointA ** 2;
		let pointA3 = pointA ** 3;
		let pointA4 = pointA ** 4;

		let randA = sl1();
		let options = [[["$a$", pointA], ["$a^2$", pointA2], ["$a^3$", pointA3]], [["$a^2$", pointA2], ["$a^3$", pointA3], ["$a^4$", pointA4]]][randA];

		let isMaxTaskOrMin = sl1();
		let targetValue = [options.T(x => x[1])[1].maxE(), options.T(x => x[1])[1].minE()][isMaxTaskOrMin];
		let maxOrMin = ['бол', 'мен'][isMaxTaskOrMin];

		let correctOptions = options.filter(x => x[1] === targetValue);
		let correct = correctOptions.length === 1 ? correctOptions[0][0] : "нет данных";

		let allLabels = options.map(x => x[0]);
		allLabels.pushIf("нет данных", !allLabels.includes("нет данных"));

		NAtask.setTask({
			text: "На координатной прямой отмечены числа. Какое из перечисленных чисел наи" + maxOrMin + "ьшее?",
			answers: correct,
			wrongAnswers: allLabels.filter(label => label !== correct)
		});

		AtoB(3, allLabels.indexOf(correct));

		chas2.task.modifiers.addCanvasIllustration({
			width: 400,
			height: 100,
			paint: paint1,
		});
	}, 1000);
})();
//zer00player
//https://oge.sdamgia.ru/test?likes=337301
