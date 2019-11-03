const CANDIDATE_INDICES = {
	Tim: 0,
	Sally: 1,
	Beth: 2,
}

function castVote(name, votes) {
	const votesCopy = [...votes]
	votesCopy[CANDIDATE_INDICES[name]]++
	return votesCopy
}
