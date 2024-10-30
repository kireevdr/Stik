const fs = require('fs');
const path = require('path');

const rootPath = path.resolve(__dirname, '../')

const examplePath = path.relative(rootPath, '.env.example')
const envPath = path.relative(rootPath, '.env')


const backupEnv = (envPath) => {
	if (!fs.existsSync(envPath)) {
		return
	}
	const options = {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
	};

	const dateStr = new Date().toLocaleString("ru", options).replace(/[^\d]/g, '-')
	fs.copyFileSync(envPath, `${envPath}.backup ${dateStr}`)
}
const copeEnv = (srcPath, distPath) => fs.copyFileSync(srcPath, distPath)

backupEnv(envPath)
copeEnv(examplePath, envPath)

console.log('ok')
