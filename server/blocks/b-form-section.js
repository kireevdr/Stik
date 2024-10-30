const colors = require('../colors')

module.exports = {
	"view": "b_form_section",
	"preview": "/img/blocks-library/b_form_section.jpg",
	"name": "Секция с формой",
	"class": "",
	"id": "",
	categories: ['form'],
	"content": [
		{
			"type": "wysiwyg",
			"name": "title",
			"label": "Заголовок",
			"help": "",
			"val": ""
		},
		{
			"type": "wysiwyg",
			"name": "text",
			"label": "Описание",
			"help": "",
			"val": ""
		},
		{
			"type": "text",
			"name": "btn_text",
			"label": "Текст на кнопке",
			"help": "",
			"val": ""
		},
		{
			"type": "wysiwyg",
			"name": "img_text",
			"label": "Текст на баннере",
			"help": "",
			"val": ""
		},
		{
			"type": "select",
			"name": "color",
			"label": "Цвет баннера",
			"help": "",
			"val": "",
			"options": colors
		},
		{
			"type": "image",
			"name": "img",
			"label": "Картинка на баннере",
			"help": "",
			"val": "",
			"accept": ".png",
		},

	]
}
