import favorites from "../servises/favorites";
import auth from "~/servises/auth";

export default {
	computed: {
		isLogin() {
			return this.$store.getters['auth/isAuth']
		}
	},
	methods: {
		isFavorite(id, type = 'apartament') {
			if (type == 'apartament') {
				return this.$store.getters['favorites/hasApartament'](id)
			}
			if (type == 'parking') {
				return this.$store.getters['favorites/hasParking'](id)
			}

		},
		async favoritesAdd(type, id) {
			if (!this.isLogin) {
				auth.showLoginModal({router: this.$router}, `${this.$route.path}?add-favorite`)
				return
			}

			if (type == 'apartament') {
				this.$store.commit('favorites/addApartament', id)
			}
			if (type == 'parking') {
				this.$store.commit('favorites/addParking', id)
			}
			try {
				await favorites.add({axios: this.$axios, store: this.$store}, {type, id})
			} catch (e) {
				if (type == 'apartament') {
					this.$store.commit('favorites/delApartament', id)
				}
				if (type == 'parking') {
					this.$store.commit('favorites/delParking', id)
				}
			}


		},
		async favoritesDelete(type, id) {
			if (type == 'apartament') {
				this.$store.commit('favorites/delApartament', id)
			}
			if (type == 'parking') {
				this.$store.commit('favorites/delParking', id)
			}
			try {
				await favorites.delete({axios: this.$axios, store: this.$store}, {type, id})
			} catch (e) {
				if (type == 'apartament') {
					this.$store.commit('favorites/addApartament', id)
				}
				if (type == 'parking') {
					this.$store.commit('favorites/addParking', id)
				}
			}

		}
	},
	mounted() {
		if (process.browser) {
			if (Object.keys(this.$route.query).includes('add-favorite')) {
				const type = this.$route.name == 'apartaments-id' ? 'apartament' : 'parking'
				this.favoritesAdd(type, this.$route.params.id)
			}
		}
	}
}
