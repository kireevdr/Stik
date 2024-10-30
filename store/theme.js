export const state = () => ({
	items: [
		{
			id: 0,
			label: 'День',
			icon: '/img/general/sun.svg',
			name: 'light'
		},
		{
			id: 1,
			label: 'Ночь',
			icon: '/img/general/moon.svg',
			name: 'dark'
		}
	],
	currentId: 1
})
export const mutations = {
	set(state, id) {
		state.currentId = id
	},
}
export const actions = {
	async setThemeFromTime({state, dispatch, commit}) {
		const h = new Date().getHours()
		if (h >= 7 && h <= 19) {
			commit('set', 0)
		} else {
			commit('set', 1)
		}
	}
}

export const getters = {
	items: state => state.items || [],
	currentId: state => state.currentId,
	current: state => state.items.find(n => n.id == state.currentId),
	bodyClass: (state, getters) => `theme-${getters.current.name}`,
	currentName: (state, getters) => getters.current.name
}
