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

function columnIndexToRefString(index) {
	return String.fromCharCode('A'.charCodeAt(0) + index);
}

function rowRefStringToIndex(numberString) {
	return parseInt(numberString, 10) - 1;
}

function rowIndexToRefString(index) {
	return (index + 1).toString();
}

function refToIndices(ref) {
	return [
		columnRefStringToIndex(ref.substr(0, 1)),
		rowRefStringToIndex(ref.substr(1)),
	];
}

function indicesToRef(indices) {
	return columnIndexToRefString(indices[0]) + rowIndexToRefString(indices[1]);
}

function cellContents(x, y) {
	const size = gridSizeArray();
	if (size[0] <= x || size[1] <= y) {
		return false;
	}
	return GRID[y][x];
}

function lightCell(ref) {
	return cellContents.apply(this, refToIndices(ref));
}

function testRock(cell) {
	return cell === '^';
}

function isRock(ref) {
	return testRock(lightCell(ref));
}

function testCurrent(cell) {
	return cell === '~';
}

function isCurrent(ref) {
	return testCurrent(lightCell(ref));
}

function lightRow(indexPlusOne) {
	return GRID[indexPlusOne - 1];
}

function lightColumn(columnRefString) {
	const columnIndex = columnRefStringToIndex(columnRefString);
	return GRID.map(row => row[columnIndex]);
}

function isSafe(ref) {
	return !isRock(ref) && !isCurrent(ref);
}

function* gridToArray() {
	for (const [rowIndex, row] of GRID.entries()) {
		for (const [columnIndex, cell] of row.entries()) {
			yield {
				indices: [columnIndex, rowIndex],
				cell: cell,
			};
		}
	}
}

function allRocks() {
	return Array.from(gridToArray())
		.filter(cellInfo => testRock(cellInfo.cell))
		.map(cellInfo => indicesToRef(cellInfo.indices));
}

function allCurrents() {
	return Array.from(gridToArray())
		.filter(cellInfo => testCurrent(cellInfo.cell))
		.map(cellInfo => indicesToRef(cellInfo.indices));
}
