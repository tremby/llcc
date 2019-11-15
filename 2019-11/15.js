function finalPosition(moves) {
	return moves.reduce(([ x, y ], move) => {
		switch (move) {
			case 'north': return [x, y + 1]
			case 'south': return [x, y - 1]
			case 'east': return [x + 1, y]
			case 'west': return [x - 1, y]
			default: throw new Error(`Unrecognized move "${move}"`)
		}
	}, [0, 0])
}
