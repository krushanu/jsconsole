const _drawLine = (arg) => {
	const { x1, y1, x2, y2, arr } = arg;
	if (x1 !== x2 && y1 === y2)
		return _render({
			from: x1 > x2 ? x2 : x1,
			to: x1 > x2 ? x1 : x2,
			constant: y1,
			render: 'horizontal',
			arr,
		});
	if (x1 === x2 && y1 !== y2)
		return _render({
			from: y1 > y2 ? y2 : y1,
			to: y1 > y2 ? y1 : y2,
			constant: x1,
			render: 'vertical',
			arr,
		});
};

const _render = (arg) => {
	const { from, to, constant, arr, render } = arg;
	for (let i = from; i <= to; i++) {
		if (render === 'horizontal') arr[constant][i] = '1';
		if (render === 'vertical') arr[i][constant] = '1';
	}
	return arr;
};

const _validate = (arg) => {
	const { x1, y1, x2, y2, arr } = arg;
	const canvasWidth = arr[0]?.length - 3,
		canvasHeigth = arr?.length - 3,
		lineWidth = Math.abs(x2 - x1),
		lineHeight = Math.abs(y2 - y1);

	return (
		x1 > 0 &&
		y1 > 0 &&
		x2 > 0 &&
		y2 > 0 &&
		((x1 === x2 && y1 !== y2) || (x1 !== x2 && y1 === y2)) &&
		arr.length &&
		lineWidth <= canvasWidth &&
		lineHeight <= canvasHeigth
	);
};

const DrawLine = (arg) => {
	return _validate(arg) ? _drawLine(arg) : 'Unsupported line format';
};

export { DrawLine };
