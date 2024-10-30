const colors = require('../colors')

module.exports = {
	"view": "b_text_card",
	"preview": "/img/blocks-library/b_text_card.jpg",
	"name": "Преимущества",
	"class": "",
	"id": "",
	categories: ['advantage'],
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
			"type": "select",
			"name": "color",
			"label": "Цвет баннера",
			"help": "",
			"val": "",
			"options": colors
		},
		{
			"type": "collection",
			"name": "items",
			"label": "Преимущества",
			"labelItem": "Преимущество",
			"expand": "false",
			"val": [],
			"fields": [
				{
					"type": "text",
					"name": "title",
					"label": "Заголовок",
					"help": "",
					"val": ""
				},
				{
					"type": "text",
					"name": "desc",
					"label": "Описание",
					"help": "",
					"val": ""
				},
			]
		},

	]
}
