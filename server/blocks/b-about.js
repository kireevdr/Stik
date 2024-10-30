const colors = require('../colors')

module.exports = {
	"view": "b_about",
	"preview": "/img/blocks-library/b_about.jpg",
	"name": "О компании",
	"class": "",
	"id": "",
	categories: ['advantage'],
	"content": [
		{
			"type": "wysiwyg",
			"name": "quote",
			"label": "Цитата",
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
			"type": "image",
			"name": "logo",
			"label": "Лого",
			"help": "",
			"val": "",
			"accept": ".svg",
		},
		{
			"type": "collection",
			"name": "cols",
			"label": "Колонки",
			"labelItem": "Колонка",
			"expand": "false",
			"fields": [
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
					"label": "Текст",
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
			],
			"val": [],
		}


	]
}
