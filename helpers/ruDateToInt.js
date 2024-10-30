export default function (ruDate) {
	const ruDateArr = ruDate.split('.')
	const day = ruDateArr[0]
	const month = ruDateArr[1]
	const year = ruDateArr[2]

	return new Date(`${year}-${month}-${day}`).toJSON()
}
