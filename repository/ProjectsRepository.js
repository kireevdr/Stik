export default {
	async getAll({$axios}) {
		return await $axios.$get('/projects')
	},
	async getById({$axios}, id) {
		return await $axios.$get(`/project/${id}`)
	},
	async getBySlug({$axios}, slug) {
		return await $axios.$get(`/project-info/${slug}`)
	}
}
