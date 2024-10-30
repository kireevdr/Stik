export default {
	validate() {
		return process.env.NODE_ENV == 'development'
	},
}
