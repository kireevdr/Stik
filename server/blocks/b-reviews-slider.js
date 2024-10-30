const colors = require("../colors");
module.exports = {
	"view": "b_reviews_slider",
	"preview": "/img/blocks-library/b_reviews_slider.png",
	"name": "Отзывы о проекте",
	categories: ['project'],
	"link": "/reviews",
	"content": [
		{
			"type": "text",
			"name": "title",
			"label": "Заголовок",
			"help": "",
			"val": ""
		},
		{
			"type": "select",
			"name": "color",
			"label": "Цвет",
			"help": "",
			"val": "",
			"options": colors
		},
	]
}
