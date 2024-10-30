const colors = require('../colors')

module.exports = {
	"view": "b_text_img",
	"preview": "/img/blocks-library/b_text_img.jpg",
	"name": "Текстовый блок с картинкой",
	"class": "",
	"id": "",
	categories: ['text', 'text_img'],
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
			"name": "text",
			"label": "",
			"help": "",
			"val": "<p>123</p>"
		},
		{
			"type": "text",
			"name": "btn_text",
			"label": "Текст на кнопке",
			"help": "",
			"val": ""
		},
		{
			"type": "select",
			"name": "btn_color",
			"label": "Цвет кнопки",
			"help": "",
			"val": "",
			"options": colors
		},
		{
			"type": "image",
			"name": "image",
			"label": "Картинка",
			"help": "",
			"val": "",
		},
	]
}
