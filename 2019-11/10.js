const SPOT_TYPES_ASCENDING_SIZE = ['M', 'S', 'R']

function wastedSpace(vehicle, spot) {
	const vehicleIndex = SPOT_TYPES_ASCENDING_SIZE.indexOf(vehicle)
	const spotIndex = SPOT_TYPES_ASCENDING_SIZE.indexOf(spot)
	if (vehicleIndex === -1 || spotIndex === -1) throw new Error("Unexpected type")
	return spotIndex - vehicleIndex
}

function whereCanIPark(spots, vehicle) {
	const type = vehicle.substring(0, 1).toUpperCase()
	const scoredSpots = []

	for (const [row, columns] of spots.entries()) {
		for (const [column, spot] of columns.entries()) {
			// Skip spots which are not free
			if (spot.toLowerCase() === spot) continue // Spot taken

			// Get the amount of wasted space if this vehicle takes
			// this spot
			const score = wastedSpace(type, spot)

			// If this number is negative, the car doesn't fit; skip
			if (score < 0) continue

			// If the number is zero, short-circuit
			if (score === 0) return [column, row]

			// Add the spot to the list of possibilities
			scoredSpots.push({ spot: [column, row], score })
		}
	}

	if (scoredSpots.length === 0) return false

	scoredSpots.sort(({ score: scoreA }, { score: scoreB }) => scoreA - scoreB)
	return scoredSpots[0].spot
}
