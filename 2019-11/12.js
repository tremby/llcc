function checkAir(samples, threshold) {
	return samples.filter(sample => sample === 'dirty').length / samples.length >= threshold ? "Polluted" : "Clean"
}
