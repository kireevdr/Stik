export const state = () => ({
	children: [],
	service: null
})
export const mutations = {
	setChildren(state, {data}) {
		state.children = data
	},
	setService(state, {data}) {
		state.service = data
	}
}

export const actions = {

	async fetchChildren({state, dispatch, commit}, {slug}) {
		try {
			const data = await this.$axios.$get(`service-slug/${slug}/children`, {})
			commit('setChildren', {data: data.data})

		} catch (e) {
			commit('setChildren', {data: []})
		}
	},
	async fetch({state, dispatch, commit}, {slug}) {
		try {
			const data = await this.$axios.$get(`service-slug/${slug}`)
			commit('setService', {data: data.data})

		} catch (e) {
			commit('setChildren', {data: null})
		}
	},
}
export const getters = {
	children: state => state.children,
	service: state => state.service || {}
}
