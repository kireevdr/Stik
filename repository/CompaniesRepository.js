export default {
	async getAll({$axios}) {
		return await $axios.$get('/requisites/companies')
	},
	async getById({$axios}, id) {
		return await $axios.$get(`/requisites/company/${id}`)
	}
}
