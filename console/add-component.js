const readline = require('readline');
const fs = require('fs');
const path = require('path');

const componentsPath = '../components'

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('Название компонента? ', (answer) => {
	const componentName = answer.replace(/-/g, '_')
	const componentNameInHtml = answer.replace(/_/g, '-')

	const dirOfComponent = `/${componentName}`
	const dirOfComponentPath = path.resolve(__dirname, `${componentsPath}/${componentName}`)
	const dirOfTemplate = `/_template`;
	const files = ['template.vue', 'template.scss', 'template.pug'];


	if (fs.existsSync(dirOfComponentPath)) {
		console.log(`Компонент уже существует`);
	} else {
		fs.mkdirSync(dirOfComponentPath);
	}


	files.forEach((item, i, arr) => {
		const srcPath = path.resolve(__dirname, `${componentsPath}/${dirOfTemplate}/${item}`)
		const distPath = path.resolve(__dirname, `${componentsPath}/${dirOfComponent}/${item}`)

		fs.copyFileSync(srcPath, distPath);

		const extname = path.extname(distPath)


		fs.renameSync(distPath, path.resolve(__dirname, `${componentsPath}/${dirOfComponent}/${componentName}${extname}`))

		let data = fs.readFileSync(path.resolve(__dirname, `${componentsPath}/${dirOfComponent}/${componentName}${extname}`), 'utf8')


		if (extname == '.vue') {
			data = data.replace(/__name__/gi, componentName)
		} else {
			data = data.replace(/__name__/gi, componentNameInHtml)
		}


		fs.writeFileSync(path.resolve(__dirname, `${componentsPath}/${dirOfComponent}/${componentName}${extname}`), data)

	})


	rl.close();
});

