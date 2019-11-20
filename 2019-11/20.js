const PI = 3.14159

function sphereVolume(radius) {
	return PI * radius ** 3 * 4 / 3
}

function coneVolume(radius, height) {
	return PI * radius ** 2 * height / 3
}

function prismVolume(height, width, depth) {
	return height * width * depth
}

function totalVolume(solids) {
	return solids.reduce((acc, solid) => {
		switch (solid.type) {
			case 'sphere': return acc + sphereVolume(solid.radius)
			case 'cone': return acc + coneVolume(solid.radius, solid.height)
			case 'prism': return acc + prismVolume(solid.height, solid.width, solid.depth)
			default: throw new Error(`Unknown solid type "${solid.type}"`)
		}
	}, 0)
}
