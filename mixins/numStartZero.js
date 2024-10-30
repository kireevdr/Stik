export default {
	filters: {
		addZero(num) {
			return String(num).padStart(2, '0')
		}
	}
}
