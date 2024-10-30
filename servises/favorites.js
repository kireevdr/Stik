export default {
	apartamentMethod: '/favorites',
	parkingMethod: '/parking_favorites',
	async add({axios, store}, {type, id}) {
		const method = type == 'apartament' ? this.apartamentMethod : this.parkingMethod
		try {
			const res = await axios.$post(`${method}/${id}`)
			await store.dispatch('favorites/fetch')
			return res
		} catch (e) {
			alert('Не добавилось')
			console.log(e)
		}
	},
	async delete({axios, store}, {type, id}) {
		const method = type == 'apartament' ? this.apartamentMethod : this.parkingMethod
		try {
			const res = await axios.$delete(`${method}/${id}`)
			await store.dispatch('favorites/fetch')
			return res
		} catch (e) {
			alert('Не удалилось')
			console.log(e)
		}
	}
}
