export const state = () => ({
	showDropdown: 0
})
export const mutations = {
	showDropdown(state) {
		state.showDropdown = 1
	},
	hideDropdown(state) {
		state.showDropdown = 0
	},
}
export const getters = {
	showDropdown: state => state.showDropdown
}
