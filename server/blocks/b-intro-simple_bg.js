const colors = require('../colors')

module.exports = {
	"view": "b_intro_simple_bg",
	"preview": "/img/blocks-library/b_intro_simple.jpg",
	"name": "Первый экран",
	"class": "b-intro-simple_bg",
	"id": "",
	categories: ['main'],
	"content": [
		{
			"type": "text",
			"name": "h1",
			"label": "Заголовок",
			"help": "",
			"val": ""
		},
		{
			"type": "wysiwyg",
			"name": "desc",
			"label": "Описание",
			"help": "",
			"val": ""
		},
		{
			"type": "image",
			"name": "bg",
			"label": "Фон",
			"help": "",
			"val": "",
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
