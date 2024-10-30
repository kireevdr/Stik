export const state = () => ({
	pages: []
})
export const mutations = {
	setPage(state, {url, data}) {
		state.pages[url] = data
	},
	setMeta(state, {data}) {
		state.pages = data
	},
}

export const actions = {

	async fetchContent({state, dispatch, commit}, {url}) {
		try {
			if (state.pages[url]) {
				return
			}
			const data = await this.$axios.$get('page', {
				params: {
					url
				}
			})
			commit('setPage', {url, data})

		} catch (e) {
			console.log(e)
			throw e
		}
	},
	async fetch({state, dispatch, commit}) {
		try {
			if (state.pages.length > 0) {
				return
			}
			const data = await this.$axios.$get('page')
			commit('setMeta', {data})

		} catch (e) {
			console.log(e)
			throw e
		}
	},
}
export const getters = {
	meta: state => url => state.pages.find(n => n.url == url) || {}
}
