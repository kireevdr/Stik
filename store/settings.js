export const state = () => ({
	settings: null
})
export const mutations = {
	setSettings(state, data) {
		state.settings = data
	},
}
export const actions = {
	async fetch({state, dispatch, commit}) {
		try {
			if (state.settings != null) {
				return
			}
			const settings = await this.$axios.$get('settings')
			commit('setSettings', settings.data)

		} catch (e) {
			console.log(e)
			throw e
		}
	},
}
export const getters = {
	settings: state => state.settings || {}
}
