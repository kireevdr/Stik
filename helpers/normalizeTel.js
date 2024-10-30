export default function (v) {
	if (!v) {
		return ''
	}
	return `+${v.replace(/\D+/g, "")}`
}
