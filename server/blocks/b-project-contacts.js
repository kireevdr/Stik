const colors = require("../colors");
module.exports = {
	"view": "b_project_contacts",
	"preview": "/img/blocks-library/b_project_contacts.png",
	"name": "Контакты",
	categories: ['contacts'],
	"link": "/projects/vitamin",
	"content": [

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
			]
		},
		{
			"type": "image",
			"name": "b_project_contacts__bg",//уникальное имя
			"label": "Фон",
			"help": "",
			"val": "",
			accept: ".png, .jpg, .jpeg"
		},
	]
}
