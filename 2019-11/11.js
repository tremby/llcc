function busTimes(buses) {
	return Object.entries(buses).reduce((acc, [name, { distance, speed }]) => ({
		...acc,
		[name]: distance / speed,
	}), {})
}
