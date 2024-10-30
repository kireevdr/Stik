export default function (html) {
	return html.replace(/(<([^>]+)>)/gi, "");
}
