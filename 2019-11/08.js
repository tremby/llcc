function smartGarbage(trash, bins) {
	return {
		...bins,
		[trash]: bins[trash] + 1,
	}
}
