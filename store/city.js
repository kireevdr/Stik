export const state = () => ({
	cities: []
})
export const mutations = {
	setCities(state, {data}) {
		state.cities = data
	},
}

export const actions = {

	async fetch({state, dispatch, commit}) {
		try {
			if (state.cities.length > 0) {
				return
			}
			const data = await this.$axios.$get('cities')
			commit('setCities', {data:data.data})

		} catch (e) {
			console.log(e)
			throw e
		}
	},
	async getBySlug({state, dispatch, commit}, {slug}) {
		const data = await this.$axios.$get(`city-info/${slug}`)
		return data
	}
}
export const getters = {
	//getBySlug: state => slug => state.cities.find(n => n.slug == slug) || {},
	list: state => state.cities
}
