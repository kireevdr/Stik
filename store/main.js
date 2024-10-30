export const state = () => ({
	slider: []
})
export const mutations = {
	setSlider(state, {data}) {
		state.slider = data.slider
	},
}

export const actions = {
	async fetch({state, dispatch, commit}) {
		try {
			if (state.slider.length > 0) {
				return
			}
			const data = await this.$axios.$get('main')
			commit('setSlider', {data})

		} catch (e) {
			console.log(e)
			throw e
		}
	},
}
export const getters = {
	slider: state => state.slider
}
