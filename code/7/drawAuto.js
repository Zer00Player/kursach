function coordAxisdrawAuto(ct, {
	points = [], // [{ value: число, label: строка, mark: 'dot'|'line'|'nothing', labelPos: 'overAxis'|'underAxis'|'onAxis' }]
	margin = 20,
	width = 400,
	height = 100
} = {}) {
	coordAxisprepare(ct, { width, height });

	if (points.length === 0) {
		return;
	};

	let values = points.map(p => p.value);
	let min = values.minE();
	let max = values.maxE();

	if (min === max) {
		min -= 1;
		max += 1;
	} else {
		let padding = (max - min) * 0.05;
		min -= padding;
		max += padding;
	} 
	let range = max - min;

	let x0 = margin;
	let x1 = width - margin;
	let scale = (x1 - x0) / range;

	for (let { value, label, mark, labelPos } of points) {
		let x = mathToCanvas(value, min, scale, x0);
		coordAxisdrawMarkPoint(ct, x, label, mark, labelPos);
	}
};
