export default {
	filters: {
		numberFormatter: (v) => {    //добавляет пробелы в цену
			v = Math.round(v)
			v = v + '';
			v = v.split('').reverse().map((item, i) => i % 3 == 0 ? item + ' ' : item)
			v = v.reverse().join('');
			return v
		},
	},
}
