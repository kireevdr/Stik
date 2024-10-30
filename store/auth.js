import isoDateToRuFormat from "@/helpers/isoDateToRuFormat";

export const state = () => ({
	token: null,
	refresh: null,
	profile: {},
	email: '',
	authCallback: null
})

export const mutations = {
	setToken(state, {token, refresh_token}) {
		state.token = token
		state.refresh = refresh_token
	},
	logout(state) {
		state.token = null
		state.refresh = null
		state.profile = {}
		state.email = ''
	},
	setProfile(state, {profile}) {
		state.profile = profile
	},
	setEmail(state, {email}) {
		state.email = email
	}
}
export const actions = {
	async fetchProfile({state, dispatch, commit}) {
		const profile = await this.$axios.$get('profile')

		profile.birthday = isoDateToRuFormat(profile.birthday)

		commit('setProfile', {profile})
	}
}
export const getters = {
	isAuth: state => Boolean(state.token),
	token: state => state.token,
	refresh: state => state.refresh,
	profile: state => JSON.parse(JSON.stringify(state.profile)),
	email: state => state.email,
}
