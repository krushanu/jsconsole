import { DrawLine } from './DrawLine';

const _drawRect = (arg) => {
	const { x1, y1, x2, y2, arr } = arg;
	return DrawLine({
		x1: x1,
		y1: y1,
		x2: x2,
		y2: y1,
		arr: DrawLine({
			x1: x2,
			y1: y1,
			x2: x2,
			y2: y2,
			arr: DrawLine({
				x1: x2,
				y1: y2,
				x2: x1,
				y2: y2,
				arr: DrawLine({
					x1: x1,
					y1: y1,
					x2: x1,
					y2: y2,
					arr: arr,
				}),
			}),
		}),
	});
};

const _validate = (arg) => {
	const { x1, y1, x2, y2, arr } = arg;
	const canvasWidth = arr[0]?.length - 3,
		canvasHeigth = arr?.length - 3,
		rectWidth = Math.abs(x2 - x1),
		rectHeight = Math.abs(y2 - y1);

	return (
		x1 > 0 &&
		y1 > 0 &&
		x2 > 0 &&
		y2 > 0 &&
		rectWidth > 0 &&
		rectHeight > 0 &&
		arr.length &&
		rectWidth <= canvasWidth &&
		rectHeight <= canvasHeigth
	);
};

const DrawRect = (arg) => {
	return _validate(arg) ? _drawRect(arg) : 'Unsupported rect format';
};

export { DrawRect };
