function powerOn() {
	ship.powerOn = true;
}

function countModules() {
	return availableModules.length;
}

function countEssential() {
	return availableModules.filter(mod => mod.essential).length;
}

function findModuleIndex(name) {
	return availableModules.findIndex(mod => mod.name === name);
}

function loadModule(index) {
	availableModules[index].enabled = true;
	ship.modules.push(availableModules[index]);
}

function resetLARRY() {
	for (let i = 0; i < 10; i++) {
		LARRY.quack();
	}
}

function setMessage() {
	radio.message = JSON.stringify(navigation);
}

function activateBeacon() {
	radio.beacon = true;
}

function setFrequency() {
	radio.frequency = (radio.range.low + radio.range.high) / 2;
}

function initialize() {
	navigation.x = navigation.y = navigation.z = 0;
}

function calibrateX() {
	for (let i = 0; i < 12; i++) {
		const signal = checkSignal();
		if (signal !== undefined) {
			navigation.x = signal;
			break;
		}
	}
}

loadModule(findModuleIndex('life-support'));
loadModule(findModuleIndex('propulsion'));
loadModule(findModuleIndex('navigation'));
resetLARRY();
loadModule(findModuleIndex('communication'));
setMessage();
calibrateX();
