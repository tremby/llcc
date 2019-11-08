const INTERESTING_KEYWORDS = ['smart city', 'arts funding', 'transportation']

function termTopics(interviews) {
	return interviews.reduce((tally, interview) => {
		const index = INTERESTING_KEYWORDS.indexOf(interview)
		if (index !== -1) tally[index]++
		return tally
	}, Array(INTERESTING_KEYWORDS.length).fill(0))
}
