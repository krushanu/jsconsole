const bufferBucketFill = (arg) => {
	const { x, y, c } = arg;
	let { arr } = arg;
	let target_color = arr[y][x];
	if (target_color !== c) {
		const _bufferBucketFill = (x, y, target_color, replacement_color) => {
			if (target_color === arr[y][x]) {
				arr[y][x] = replacement_color ? replacement_color : '@';
				_bufferBucketFill(x, y + 1, target_color, replacement_color);
				_bufferBucketFill(x + 1, y, target_color, replacement_color);
				_bufferBucketFill(x, y - 1, target_color, replacement_color);
				_bufferBucketFill(x - 1, y, target_color, replacement_color);
			}
		};
		_bufferBucketFill(x, y, target_color, c);
	}
	return arr;
};

const _validate = (arg) => {
	const { x, y, c, arr } = arg;
	const canvasWidth = arr[0]?.length - 3,
		canvasHeigth = arr?.length - 3;

	return (
		c &&
		x > 0 &&
		y > 0 &&
		x <= canvasWidth &&
		y <= canvasHeigth &&
		arr.length &&
		arr[y][x] !== c
	);
};

const FillBucket = (arg) => {
	return _validate(arg) ? bufferBucketFill(arg) : 'Input Validation Failed!';
};

export { FillBucket };
