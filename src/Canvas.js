const checkCanvas = (drawingArray) => {
	return drawingArray.length;
};

const constructCanvas = (arg) => {
	const { w, h } = arg,
		arr = [];
	const width = parseInt(w),
		height = parseInt(h);

	for (let i = 0; i <= height + 1; i++) {
		let subarr = [];
		for (let j = 0; j <= width + 1; j++) {
			if (i === 0 || i === height + 1) {
				subarr.push('-');
			} else if (j === 0 || j === width + 1) {
				subarr.push('|');
			} else {
				subarr.push('0');
			}
		}
		arr.push(subarr);
	}
	return arr;
};

export { checkCanvas, constructCanvas };
