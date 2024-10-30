const colors = require('../colors')

module.exports = {
	"view": "b_main",
	"preview": "/img/blocks-library/b_main.jpg",
	"name": "Слайдер на первом экране",
	"class": "",
	"id": "",
	categories: ['main'],
	"content": [


		{
			"type": "collection",
			"name": "items",
			"label": "Слайды",
			"labelItem": "Слайд",
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
					"label": "Текст",
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
					"type": "text",
					"name": "btn_link",
					"label": "Ссылка",
					"help": "",
					"val": ""
				},
				{
					"type": "image",
					"name": "bg",
					"label": "Фон десктоп",
					"help": "",
					"val": "",
				},
				{
					"type": "image",
					"name": "bg_mobile",
					"label": "Фон телефон",
					"help": "",
					"val": "",
				},
			]
		},
	]
}
