export default {
	async getParkingInner({$axios}, id) {
		return await $axios.$get(`/parking/${id}`)
	},
	async getParkingPlans({$axios}, id) {
		return await $axios.$get(`/parking/levels/${id}`)
	}
}
