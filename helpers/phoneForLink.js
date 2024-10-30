export default function(tel) {
	const telArr = []
	const additional = tel.match(/(?<=доб )(\(?\d+\)?)/gm)
	tel = tel
		.trim()
		.replace(/(?<=доб )(\(?\d+\)?)/gm, '')
		.trim()
		.split('')

	for (let i=0; i <tel.length; i++) {
		if (/[а-я]/gi.test(tel[i])) {
			break
		}
		telArr.push(tel[i])
	}

	tel = telArr.join('')
	tel = tel.replace(/\D+/g,"")
	if (tel.startsWith(7)) {
		tel = `+${tel}`
	}
	if (additional) {
		tel += `,${additional[0].replace(/\D+/g,"")}`
	}
	return tel
}
