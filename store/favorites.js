export const state = () => ({
	apartaments: [],
	parking: [],
	viewType: 'list',
	type: 'all'
})
export const mutations = {
	setApartaments(state, data) {
		state.apartaments = data || []
	},
	setParking(state, data) {
		state.parking = data || []
	},
	clear(state) {
		state.apartaments = []
		state.parking = []
	},
	addApartament(state, id) {
		state.apartaments.push({id})
	},
	addParking(state, id) {
		state.parking.push({id})
	},
	delApartament(state, id) {
		state.apartaments = state.apartaments.filter(n => n.id != id)
	},
	delParking(state, id) {
		state.parking = state.parking.filter(n => n.id != id)
	},
	setViewType(state, type) {
		state.viewType = type
	},
	setType(state, type) {
		state.type = type
	}

}
export const actions = {
	async fetch({state, dispatch, commit}) {
		try {
			const apartaments = await this.$axios.$get('/favorites')
			commit('setApartaments', apartaments)

			const parking = await this.$axios.$get('/parking_favorites')
			commit('setParking', parking)

		} catch (e) {
			console.log(e)
			throw e
		}
	},

}
export const getters = {
	apartaments: state => state.apartaments || [],
	parking: state => state.parking || [],
	hasApartament: state => id => state.apartaments.find(n => n.id == id),
	hasParking: state => id => state.parking.find(n => n.id == id),
	viewType: state => JSON.parse(JSON.stringify(state.viewType)),
	type: state => JSON.parse(JSON.stringify(state.type))
}

