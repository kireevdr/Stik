module.exports = {
	"view": "b_img",
	"preview": "/img/blocks-library/b_img.jpg",
	"name": "Картинка",
	"class": "",
	"id": "",
	categories: ['text'],
	"content": [
		{
			"type": "select",
			"name": "size",
			"label": "Ширина",
			"help": "",
			"val": "",
			"options": [
				{
					"val": "12",
					"text": "100%"
				},
				{
					"val": "9",
					"text": "3/4"
				},
				{
					"val": "8",
					"text": "2/3"
				},
				{
					"val": "6",
					"text": "1/2"
				},
			]
		},
		{
			"type": "text",
			"name": "link",
			"label": "Ссылка",
			"help": "",
			"val": ""
		},
		{
			"type": "image",
			"name": "b_img__img",
			"label": "Картинка",
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

	]
}
