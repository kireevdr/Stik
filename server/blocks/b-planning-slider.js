module.exports = {
	"view": "b_planning_slider",
	"preview": "/img/blocks-library/b_planning_slider.jpg",
	"name": "Преимущества",
	categories: ['advantage'],
	"content": [
		{
			"type": "collection",
			"name": "slides",
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
					"type": "image",
					"name": "bg",
					"label": "Фон",
					"help": "",
					"val": "",
				},
				{
					"type": "collection",
					"name": "points",
					"label": "Преимущества",
					"labelItem": "Преимущество",
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
							"label": "Описание",
							"help": "",
							"val": ""
						},
						{
							"type": "text",
							"name": "top",
							"label": "Top, %",
							"help": "",
							"val": ""
						},
						{
							"type": "text",
							"name": "left",
							"label": "Left, %",
							"help": "",
							"val": ""
						},
					]
				},
			]
		},
	]
}
