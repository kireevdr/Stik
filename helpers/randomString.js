import randomInteger from "./randomInteger";

/*
* Генерирует строку случайных символов из букв и цифр
* @param {number} length - Длина строки
* @param {Bool} includingUppercase 1 - Прописные и строчные символы в строке. 0 - только строчные
* */
export default function (length = 10, includingUppercase = false) {
	const letter = () => Math.random().toString(36).substring(5, 6);
	return new Array(length)
		.fill('')
		.map(() => includingUppercase && randomInteger(0, 1) ? letter().toUpperCase() : letter())
		.join('')
}
