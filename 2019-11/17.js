function judgeVegetable(vegetables, metric) {
	return vegetables.reduce((leader, v) => {
		if (leader == null) return v
		return v[metric] > leader[metric] ? v : leader
	}, null).submitter
}
