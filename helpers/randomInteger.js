/*
* случайное число от min до max
* */
export default function (min, max) {
	let rand = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);
}
