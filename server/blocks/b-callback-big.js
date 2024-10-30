const colors = require('../colors')

module.exports = {
	"view": "b_callback_big",
	"preview": "/img/blocks-library/b_callback_big.jpg",
	"name": "Секция с формой большая",
	categories: ['form'],
	"content": [
		{
			"type": "text",
			"name": "title",
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
			"type": "text",
			"name": "title_btn",
			"label": "Текст на кнопке",
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
		{
			"type": "image",
			"name": "b_callback__img",//уникальное имя
			"label": "Картинка",
			"help": "",
			"val": "",
			accept: ".png, .jpg, .jpeg"
		},

	]
}
