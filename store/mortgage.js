export const state = () => ({
	mortgage: null
})
export const mutations = {
	setBid(state, data) {
		state.mortgage = data
	},
}
export const getters = {
	mortgage: state => state.mortgage || {}
}
