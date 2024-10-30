export default function (isoDate) {
	const dateArr = isoDate.split('T')[0].split('-')
	const date = `${dateArr[2]}.${dateArr[1]}.${dateArr[0]}`
	return date
}
