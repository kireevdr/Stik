module.exports = {
	"view": "b_projects_gallery",
	"preview": "/img/blocks-library/b_projects_gallery.jpg",
	"name": "Галерея",
	"class": "",
	"id": "",
	categories: ['text', 'project'],
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
			"name": "categories",
			"label": "Категории",
			"labelItem": "Категория",
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
					"type": "gallery",
					"name": "images",
					"label": "Фото",
					"help": "",
					"val": "",
				},
			]
		},
	]
}
