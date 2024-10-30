const colors = require("../colors");

module.exports = {
	"view": "b_achievements",
	"preview": "/img/blocks-library/b_achievements.jpg",
	"name": "Достижения",
	"class": "",
	"id": "",
	categories: ['advantage'],
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
			"type": "text",
			"name": "btn_link",
			"label": "Ссылка",
			"help": "",
			"val": ""
		},
		{
			"type": "image",
			"name": "b_achievements__img",//уникальное имя
			"label": "Фон",
			"help": "",
			"val": "",
			accept: ".png, .jpg, .jpeg"
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
					"name": "val",
					"label": "Жирный текст",
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
				{
					"type": "image",
					"name": "icon",
					"label": "Иконка",
					"help": "",
					"val": "",
					"accept": ".svg",
				},
			]
		},
		{
			"type": "gallery",
			"name": "b_achievements__logos",//уникальное имя
			"label": "Логотипы",
			"help": "",
			"val": "",
			accept: ".png"
		},

		{
			"type": "collection",
			"name": "contacts",
			"label": "Контакты",
			"labelItem": "Контакт",
			"expand": "false",
			"val": [],
			"max": 1,
			"fields": [

				{
					"type": "text",
					"name": "name",
					"label": "Название",
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
					"name": "items",
					"label": "Данные",
					"labelItem": "Данные",
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
							"type": "text",
							"name": "value",
							"label": "Значение",
							"help": "",
							"val": ""
						},
						{
							"type": "text",
							"name": "link_url",
							"label": "Ссылка",
							"help": "",
							"val": ""
						},
						{
							"type": "text",
							"name": "link_text",
							"label": "Текст ссылки",
							"help": "",
							"val": ""
						},
					]
				},

			]
		},
	]
}
