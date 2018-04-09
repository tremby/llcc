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

function columnRefStringToIndex(letter) {
	return letter.charCodeAt(0) - 'A'.charCodeAt(0);
}

function rowRefStringToIndex(numberString) {
	return parseInt(numberString, 10) - 1;
}

function refToIndices(ref) {
	return [
		columnRefStringToIndex(ref.substr(0, 1)),
		rowRefStringToIndex(ref.substr(1)),
	];
}

function cellContents(x, y) {
	return GRID[y][x];
}

function lightCell(ref) {
	return cellContents.apply(this, refToIndices(ref));
}

function isRock(ref) {
	return lightCell(ref) === '^';
}

function isCurrent(ref) {
	return lightCell(ref) === '~';
}

function lightRow(indexPlusOne) {
	return GRID[indexPlusOne - 1];
}

function lightColumn(columnRefString) {
	const columnIndex = columnRefStringToIndex(columnRefString);
	return GRID.map(row => row[columnIndex]);
}
