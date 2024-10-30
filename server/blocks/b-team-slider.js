const colors = require('../colors')

module.exports = {
	"view": "b_team_slider",
	"preview": "/img/blocks-library/b_team_slider.jpg",
	"name": "Команда",
	"class": "",
	"id": "",
	categories: ['about'],
	"content": [
		{
			"type": "text",
			"name": "title",
			"label": "Заголовок",
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
			"type": "collection",
			"name": "items",
			"label": "Сотрудники",
			"labelItem": "Сотрудник",
			"expand": "false",
			"val": [],
			"fields": [
				{
					"type": "text",
					"name": "name",
					"label": "Имя",
					"help": "",
					"val": ""
				},
				{
					"type": "text",
					"name": "staff",
					"label": "Должность",
					"help": "",
					"val": ""
				},
				{
					"type": "image",
					"name": "photo",
					"label": "Фото",
					"help": "",
					"val": "",
					"accept": ".png",
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
		},
	]
}
