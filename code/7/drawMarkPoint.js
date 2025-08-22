function coordAxisdrawMarkPoint(ct, coord, text, markForm, textPosition, options = {}) {
//@author : zer00player
//coordAxisdrawMarkPoint функция, которая рисует отметку на координатной оси (точку, выколтую точку, засечку или ничего) с подписью.
/*
 * @param {CanvasRenderingContext2D} ct Контекст отрисовки.
 * @param {number} coord Координата по оси X, где нужно поставить отметку.
 * @param {string} text Подпись
 * @param {'dot'|'emptyDot'|'line'|'nothing'} markForm Форма метки: точка,выколотая точка, засечка, отсутствие метки.
 * @param {'underAxis'|'overAxis'|'onAxis'} textPosition Позиция текста относительно оси.
 * @param {Object} [options={}] Дополнительные параметры оформления.
*/
	let {
		font = "16px liberation sans",
		fillStyle = om.secondaryBrandColors[0],
		strokeStyle = fillStyle,
		lineWidth = 1.5,
		textOffsetX
	} = options;
	/* 
	 * @param {string} [options.font="16px liberationsans"] Шрифт подписи.
	 * @param {string} [options.fillStyle=om.secondaryBrandColors[0]] Цвет подписи и заливки точки.
	 * @param {string} [options.strokeStyle=fillStyle] Цвет засечки (по умолчанию совпадает с fillStyle).
 	 * @param {number} [options.lineWidth=1.5] Толщина линии засечки.
	 * @param {number} [options.textOffsetX] смещение текста по X.
	*/

	let prevFillStyle = ct.fillStyle;
	let prevStrokeStyle = ct.strokeStyle;
	let prevFont = ct.font;
	let prevLineWidth = ct.lineWidth;
	/* 
	 * @private
 	 * @type {string} prevFillStyle сохраняет текущий цвет перед временной заменой
	 * @type {string} prevStrokeStyle сохраняет текущий цвет перед временной заменой
	 * @type {string} prevFont сохраняет текущий шрифт перед заменой
	 * @type {number} prevLineWidth сохраняет текущую толщину перез заменой
 	*/

	ct.fillStyle = fillStyle;
	ct.strokeStyle = strokeStyle;
	ct.font = font;
	ct.lineWidth = lineWidth;
	/*
 	 * Устанавливает новые параметры рисования перед отрисовкой объекта.
 	 * @param {string} fillStyle Цвет заливки (например, для текста или точки).
 	 * @param {string} strokeStyle Цвет обводки (например, для засечек).
 	 * @param {string} font Шрифт текста (например, "16px liberationsans").
 	 * @param {number} lineWidth Толщина линий.
 	*/

	//* @param {'dot'|'emptyDot'|'line'|'nothing'} markForm Форма метки: точка,выколотая точка, засечка, отсутствие метки.
	switch (markForm) {
		case "dot":
			ct.drawFilledCircle(coord, 0, 5);
			break;
		case "emptyDot":
			ct.drawFilledCircle(coord, 0, 5);
			ct.fillStyle = "\#ffffff";
			ct.drawFilledCircle(coord, 0, 3);
			ct.fillStyle = fillStyle;
			break;	
		case "line":
			ct.lineWidth = 1.5;
			ct.drawLine(coord, -6, coord, 6);
			break;
		case "nothing":
			break;
	}

	//* @param {'underAxis'|'overAxis'|'onAxis'} textPosition Позиция текста относительно оси.Под осью(для чёрточек), Над осью(для точек) и по линии оси(после стрелки).
	switch (textPosition) {
		case "underAxis":
			ct.fillText(text, coord - (textOffsetX || 4), 20);
			break;
		case "overAxis":
			ct.fillText(text, coord - (textOffsetX || 4), -10);
			break;
		case "onAxis":
			ct.fillText(text, coord + (textOffsetX || 6), 5);
			break;
	}

	ct.fillStyle = prevFillStyle;
	ct.strokeStyle = prevStrokeStyle;
	ct.font = prevFont;
	ct.lineWidth = prevLineWidth;
	/*
 	 * Возвращает исходные параметры рисования после завершения работы функции.
 	 * @see prevFillStyle возвращает исходный цвет
 	 * @see prevStrokeStyle возвращает исходный цвет
 	 * @see prevFont возвращет исходный шрифт
 	 * @see prevLineWidth возвращает исходную толщину
 	*/
\};
