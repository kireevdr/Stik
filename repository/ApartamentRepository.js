export default {
	async getById({$axios}, id) {
		return await $axios.$get(`/apartament/${id}`)
	},
}
