/*
* Делает каждое слово строки с заглавной буквы
* */
export default function (str) {
	return str.replace(/(?:^|\s)\S/g, function (a) {
		return a.toUpperCase();
	});
}
