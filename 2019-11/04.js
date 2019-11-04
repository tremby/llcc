function registerToVote(name, unregisteredVoters) {
	return unregisteredVoters.filter(n => n !== name);
}
