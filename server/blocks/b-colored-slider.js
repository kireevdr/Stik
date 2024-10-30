const colors = require('../colors')

module.exports = {
	"view": "b_colored_slider",
	"preview": "/img/blocks-library/b_colored_slider.jpg",
	"name": "Слайдер преимуществ",
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
	]
}
