const OFFERINGS = [
	// price, grams spice
	[5, 30], // pie
	[3, 15], // latte
	[1, 3], // macaron
]

function pumpkinSpice(money) {
	const purchases = Array(OFFERINGS.length).fill(0)
	let totalSpice = 0
	for (const [index, [price, spice]] of OFFERINGS.entries()) {
		while (money >= price) {
			money -= price
			totalSpice += spice
			purchases[index]++
		}
	}

	return [...purchases, totalSpice]
}
