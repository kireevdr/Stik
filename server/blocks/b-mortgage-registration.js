const colors = require('../colors')

module.exports = {
	"view": "b_mortgage_registration",
	"preview": "/img/blocks-library/b_mortgage_registration.png",
	"name": "Белые колонки с цифрами",
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
			"type": "select",
			"name": "color",
			"label": "Цвет",
			"help": "",
			"val": "",
			"options": colors
		},
		{

			"type": "collection",
			"name": "tiles",
			"label": "Плитки",
			"labelItem": "Плитка",
			"expand": "false",
			"val": [],
			"fields": [
				{
					"type": "text",
					"name": "name",
					"label": "Название",
					"help": "",
					"val": ""
				},
				{
					"type": "wysiwyg",
					"name": "desc",
					"label": "Описание",
					"help": "",
					"val": ""
				}
			]
		}
	]
}
