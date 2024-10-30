//b-tech-parameters
const colors = require('../colors')

module.exports = {
	"view": "b_tech_parameters",
	"preview": "/img/blocks-library/b_tech_parameters.jpg",
	"name": "Преимущества с описанием",
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

			"type": "collection",
			"name": "items",
			"label": "Преимущества",
			"labelItem": "Преимущество",
			"expand": "false",
			"val": [],
			"fields": [
				{
					"type": "wysiwyg",
					"name": "name",
					"label": "Название",
					"help": "",
					"val": ""
				},
				{
					"type": "text",
					"name": "desc",
					"label": "Описание",
					"help": "",
					"val": ""
				}
			]
		}
	]
}
