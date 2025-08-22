function coordAxisprepare(ct, { width = 400, height = 100, strokeStyle = om.primaryBrandColors[0], lineWidth = 2 } = {}) {
	/*
	 * coordAxisprepare подготавливает прямую со стрелкой к отрисовке.
	 * @param {CanvasRenderingContext2D} ct Контекст отрисовки.
	 * @param {Object} [params={}] Опции настройки оси.
	 * @param {number} [params.width=400] Ширина области.
	 * @param {number} [params.height=100] Высота области.
	 * @param {string} [params.strokeStyle=om.primaryBrandColors[0]] Цвет линии оси.
	 * @param {number} [params.lineWidth=2] Толщина оси.
	*/

	ct.__coordAxisW = width;
	ct.__coordAxisH = height;
	/*
	 * @param {number} width Желаемая ширина координатной оси в пикселях.
	 * @param {number} height Желаемая высота координатной оси в пикселях.
	*/

	let prevStroke = ct.strokeStyle;
	let prevLineWidth = ct.lineWidth;
	/* 
	 * @private
	 * @type {string} prevStrokeStyle сохраняет текущий цвет перед временной заменой
	 * @type {number} prevLineWidth сохраняет текущую толщину перез заменой
 	*/

	ct.translate(0, height / 2);
	/*
 	 * Смещает систему координат: вертикально центрирует ось X.
 	 * @param {number} x Горизонтальное смещение (в данном случае 0).
 	 * @param {number} y Вертикальное смещение — половина высоты canvas.
 	 * @this {CanvasRenderingContext2D}
 	*/

	ct.strokeStyle = strokeStyle;
	ct.lineWidth = lineWidth;
	/*
 	 * @param {string} strokeStyle установка цвет линии оси.
 	 * @param {number} lineWidth установка толщина оси.
 	*/

	ct.drawArrow(10, 0, width - 10, 0);
	/*
 	 * Рисует горизонтальную ось с направляющей стрелкой.
 	 * @param {number} x1 Начальная координата оси.
 	 * @param {number} y1 Начальная координата по оси Y (0).
 	 * @param {number} x2 Конечная координата оси.
 	 * @param {number} y2 Конечная координата по оси Y (0).
 	*/

	ct.strokeStyle = prevStroke;
	ct.lineWidth = prevLineWidth;
	/*
 	 * Возвращает исходные параметры рисования после завершения работы функции.
 	 * @see prevStrokeStyle
 	 * @see prevLineWidth
 	*/
};

function mathToCanvas(x, min, scale, x0) {
	return x0 + (x - min) * scale;
};