export default {
	filters: {
		/*
		* Выдает существительное с нужым склонением в зависимости от числа
		* @param {Number} n число
		* @param {Array} titles Массив с существительными [одна, две, много]
		* @exampl decLabel(5, ['найдена', 'найдено', 'найдены']);
		* */
		decLabel: (n, titles) => {
			console.log(77777, titles)
			const cases = [2, 0, 1, 1, 1, 2];
			const label = titles[(n % 100 > 4 && n % 100 < 20) ? 2 : cases[(n % 10 < 5) ? n % 10 : 5]]
			return `${label}`
		}
	},
}
