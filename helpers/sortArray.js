//ordena de mayor a menor
const sortArray = (x, y) => {
	if (x.score > y.score) {
		return -1
	}
	if (x.score < y.score) {
		return 1
	}
	return 0
}
module.exports = {
	sortArray,
}
