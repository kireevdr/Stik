// const data = require('../blocks.json')
const importModules = require('import-modules');
const modules = importModules('../blocks/', options = {camelize: false});

const data = {
	"library": {},
	categories: [
		{
			id: 'main',
			title: 'Первые экраны',
		},
		{
			id: 'text',
			title: 'Текстовые',
		},
		{
			id: 'advantage',
			title: 'Преимущества',
		},
		{
			id: 'slider',
			title: 'Слайдеры',
		},
		{
			id: 'form',
			title: 'Формы',
		},
		{
			id: 'text_img',
			title: 'Картинка - текст',
		},
		{
			id: 'projects',
			title: 'Проекты',
		},
		{
			id: 'contacts',
			title: 'Контакты',
		},
		{
			id: 'about',
			title: 'О компании',
		}
	]
}

Object.keys(modules)
	.forEach(key => {
		const keyInSnakeStyle = key.replace(/-/g, '_')
		data.library[keyInSnakeStyle] = modules[key]
	})

module.exports.index = (req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*")
	res.setHeader("Access-Control-Allow-Credentials", "true");
	res.setHeader("Access-Control-Allow-Headers", "*");
	res.setHeader("Access-Control-Expose-Headers", "*");
	res.setHeader("Access-Control-Request-Headers", "*");
	res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
	res.json(data)
}
