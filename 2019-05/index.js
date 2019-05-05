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

loadModule(findModuleIndex('life-support'));
loadModule(findModuleIndex('propulsion'));
