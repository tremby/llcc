function gridSizeArray() {
	return [(GRID[0] || []).length, GRID.length];
}

function gridSize() {
	const dimensions = gridSizeArray();
	return `${dimensions[0]} x ${dimensions[1]}`;
}

function totalCells() {
	const dimensions = gridSizeArray();
	return dimensions[0] * dimensions[1];
}

function refToIndices(ref) {
	return [
		ref.charCodeAt(0) - 'A'.charCodeAt(0),
		parseInt(ref.substr(1), 10) - 1,
	];
}

function cellContents(x, y) {
	return GRID[y][x];
}

function lightCell(ref) {
	return cellContents.apply(this, refToIndices(ref));
}
