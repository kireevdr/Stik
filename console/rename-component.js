const readline = require('readline');
const fs = require('fs');
const path = require('path');

const componentsPath = path.resolve(__dirname, '../components')

const readlineInterface = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});


// new function that promises to ask a question and
// resolve to its answer
function ask(questionText) {
	return new Promise((resolve, reject) => {
		readlineInterface.question(questionText, (input) => resolve(input));
	});
}

start()

async function start() {

	let componentNameOld = await ask("Старое название? ")
	let componentNameNew = await ask("Новое название? ")

	componentNameNew = componentNameNew.replace(/-/g, '_')
	const componentNameInHtmlNew = componentNameNew.replace(/_/g, '-')
	const componentNameInHtmlOld = componentNameOld.replace(/_/g, '-')

	const dirOfComponent = `${componentsPath}\\${componentNameNew}`;
	const dirOfTemplate = `${componentsPath}\\${componentNameOld}`;

	const files = ['vue', 'scss', 'pug'];

	if (fs.existsSync(dirOfComponent)) {
		console.log(`Компонент уже существует`);
	} else {
		fs.mkdirSync(dirOfComponent);
	}

	files.forEach((ext, i, arr) => {
		const srcPath = `${dirOfTemplate}\\${componentNameOld}.${ext}`
		const distPath = `${dirOfComponent}\\${componentNameOld}.${ext}`

		fs.copyFileSync(srcPath, distPath);
		const extname = path.extname(distPath)
		fs.renameSync(distPath, `${dirOfComponent}\\${componentNameNew}${extname}`)


		let data = fs.readFileSync(`${dirOfComponent}\\${componentNameNew}${extname}`, 'utf8')
		if (extname == '.vue') {
			var re = new RegExp(componentNameOld, "g");
			data = data.replace(re, componentNameNew)
		} else {
			var re = new RegExp(componentNameInHtmlOld, "g");
			data = data.replace(re, componentNameInHtmlNew)
		}


		fs.writeFileSync(`${dirOfComponent}\\${componentNameNew}${extname}`, data)

	})
	process.exit()
}

