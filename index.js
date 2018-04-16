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

function cellContents(indices) {
	const size = gridSizeArray();
	if (size[0] <= indices[0] || size[1] <= indices[1]) {
		return false;
	}
	return GRID[indices[1]][indices[0]];
}

function lightCell(ref) {
	return cellContents(refToIndices(ref));
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

function testSafe(cell) {
	return !testRock(cell) && !testCurrent(cell);
}

function isSafe(ref) {
	return testSafe(lightCell(ref));
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

function allMatches(test) {
	return Array.from(gridToArray())
		.filter(cellInfo => test(cellInfo.cell))
		.map(cellInfo => indicesToRef(cellInfo.indices));
}

function allRocks() {
	return allMatches(testRock);
}

function allCurrents() {
	return allMatches(testCurrent);
}

function firstMatch(test) {
	for (const cellInfo of gridToArray()) {
		if (test(cellInfo.cell)) {
			return indicesToRef(cellInfo.indices);
		}
	}
	return null;
}

function firstRock() {
	return firstMatch(testRock);
}

function firstCurrent() {
	return firstMatch(testCurrent);
}

function transformIndices(indices, deltaX, deltaY) {
	const newX = indices[0] + deltaX;
	const newY = indices[1] + deltaY;
	const dimensions = gridSizeArray();
	if (newX < 0 || newY < 0 || newX >= dimensions[0] || newY >= dimensions[1]) {
		return null;
	}
	return [newX, newY];
}

function isDangerous(ref) {
	const centre = refToIndices(ref);
	for (const indices of [
		centre,
		transformIndices(centre, 0, -1), // N
		transformIndices(centre, 1, 0), // E
		transformIndices(centre, 0, 1), // S
		transformIndices(centre, -1, 0), // W
	].filter(a => a !== null)) {
		if (!testSafe(cellContents(indices))) {
			return true;
		}
	}

	return false;
}
