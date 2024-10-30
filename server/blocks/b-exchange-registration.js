const colors = require('../colors')

module.exports = {
	"view": "b_exchange_registration",
	"preview": "/img/blocks-library/b_exchange_registration.jpg",
	"name": "Преимущества",
	categories: ['advantage', 'text_img'],
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
			"type": "image",
			"name": "image",
			"label": "Картинка",
			"help": "",
			"val": "",
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
