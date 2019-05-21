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

function calibrationLoop(iterations) {
	for (let i = 0; i < iterations; i++) {
		const signal = checkSignal();
		if (signal !== undefined) {
			return signal;
		}
	}
	return undefined;
}

function calibrateX() {
	const signal = calibrationLoop(12);
	if (signal !== undefined) {
		navigation.x = signal;
	}
}

function calibrateY() {
	const signal = calibrationLoop(60);
	if (signal !== undefined) {
		navigation.y = signal;
	}
}

function calibrateZ() {
	const signal = calibrationLoop(60);
	if (signal !== undefined) {
		navigation.z = signal;
	}
}

function calibrate() {
	calibrateX();
	calibrateY();
	calibrateZ();
}

function setSpeed(speed) {
	const parsedSpeed = parseInt(speed, 10);
	if (parsedSpeed >= 0) {
		navigation.speed = parsedSpeed;
	}
}

function activateAntenna() {
	ship.antenna.active = true;
}

function sendBroadcast() {
	for (let i = 0; i < 100; i++) {
		broadcast();
	}
}

function configureBroadcast() {
	setFrequency();
	activateAntenna();
	sendBroadcast();
}

const decodeMap = {
	'0': 'o',
	'1': 'i',
	'2': 'u',
	'3': 'e',
	'4': 'a',
	'5': 'y',
};

function decodeLetter(letter) {
	const decoded = decodeMap[letter];
	return decoded != null ? decoded : letter;
}

function decodeMessage(message) {
	return message.split('').map(decodeLetter).join('');
}

function returnToEarth() {
	for (const axis of ['x', 'y', 'z']) {
		navigation[axis] = parseInt(decodeMessage(broadcast(axis)), 16);
	}
}

loadModule(findModuleIndex('life-support'));
loadModule(findModuleIndex('propulsion'));
loadModule(findModuleIndex('navigation'));
resetLARRY();
loadModule(findModuleIndex('communication'));
setMessage();
configureBroadcast();
returnToEarth();
