export default {
	async getAll({$axios}) {
		return await $axios.$get('/contacts')
	}
}
