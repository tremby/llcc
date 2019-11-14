function dynamicPricing(numberOfPeople, distanceTraveled) {
	return `$${(1 + 0.25 * distanceTraveled + (numberOfPeople >= 30 ? 0.25 : 0)).toFixed(2)}`
}
