function countTickets(tickets) {
	return tickets.reduce((acc, ticket) => {
		acc[ticket]++
		return acc
	}, { red: 0, green: 0, blue: 0 })
}

function bestOdds(tickets, raffleEntries) {
	const bestColour = Object.entries(countTickets(tickets)).reduce((best, [colour, count]) => {
		const thisColour = { colour, odds: count / raffleEntries[colour] }
		if (best == null || thisColour.odds > best.odds) return thisColour
		return best
	}, null).colour
	return `You have the best odds of winning the ${bestColour} raffle.`
}
