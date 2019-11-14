function lightsOn(lights) {
	return lights.map(light => ({ ...light, on: true }))
}

function lightsOff(lights) {
	return lights.map(light => ({ ...light, on: false }))
}

function toggleLights(lights, lightsAreOn) {
	return lightsAreOn ? lightsOff(lights) : lightsOn(lights)
}
