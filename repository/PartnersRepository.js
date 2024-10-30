export default {
	async getAll({$axios}) {
		return await $axios.$get('/partners')
	}
}
