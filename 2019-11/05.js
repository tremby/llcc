function chooseStations(stations) {
	return stations
	.filter(([, capacity, type]) => capacity >= 20 && ['school', 'community centre'].includes(type))
	.map(([name]) => name);
}
