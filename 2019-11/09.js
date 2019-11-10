function carPassing(cars, speed) {
	return [...cars, { time: Date.now(), speed }]
}
