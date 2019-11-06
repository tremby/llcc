function voterTurnout(voterSignatures, voterIds) {
	if (voterSignatures.length !== voterIds.length) return false
	for (const [index, signature] of voterSignatures.entries()) {
		if (signature !== voterIds[index]) return "FRAUD!"
	}
	return "All clear, we can count the votes!"
}
