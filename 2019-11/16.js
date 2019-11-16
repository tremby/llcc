function festivalColours(hue) {
	return [
		(hue + 150) % 360,
		(hue + 210) % 360,
	].sort((a, b) => a - b)
}
