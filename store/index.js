export const state = () => ({
	initDataLoaded: false
})
export const mutations = {
	setLoaded(state, data) {
		state.initDataLoaded = true
	},
}
export const actions = {
	async nuxtServerInit({state, dispatch, commit, router, getters}, {req, route}) {
		//await auth.autoLogin({state, dispatch, commit, app: this.app})
		if (!state.initDataLoaded) {
			commit('setLoaded')
			// await dispatch('category/fetchDepartments')
			//await dispatch('settings/fetch')
			//await dispatch('city/fetch')
			dispatch('theme/setThemeFromTime')

		}
	},
}
