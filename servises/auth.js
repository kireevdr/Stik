import jwtDecode from 'jwt-decode'
import Cookies from "js-cookie";
import Cookie from "cookie";

export default {
	async registerInit(email, {$axios}) {
		const res = await $axios.$post('/register/init', {email})
		return res.ok
	},
	async setPass(password, {$axios}) {

	},
	async register({$axios, $route}, form) {
		const data = $route.query
		data.form = form
		const res = await $axios.$post('/register', data)
		return res
	},
	async getToken({$axios, $route}, email, password) {
		try {
			const res = await $axios.$post('/token', {username: email, password})
			return res
		} catch (e) {
			alert('Неверный логин или пароль')
			//throw new Error();
		}

	},
	async login({$store, $axios, $router, $route}, {token, refresh_token}) {
		$store.commit('auth/setToken', {token, refresh_token})
		$axios.setHeader('Authorization', `Bearer ${token}`)
		console.log(51351, refresh_token)
		Cookies.set('jwt', token)
		Cookies.set('refresh', refresh_token, {expires: 7})
		const email = this.getEmail(token)
		await $store.commit('auth/setEmail', {email})
		await $store.dispatch('favorites/fetch')
		await $store.dispatch('auth/fetchProfile')
		$store.commit('auth/setToken', {token, refresh_token})
		if ($route.query.redirect) {
			$router.push($route.query.redirect)
		} else {
			$router.push('/lk')
		}
	},
	async autoLogin({dispatch, commit, app}) {

		const cookieStr = process.browser ? document.cookie : app.context.req.headers.cookie
		const cookies = Cookie.parse(cookieStr || '') || {}
		const token = cookies['jwt']
		const refresh_token = cookies['refresh']

		if (this.isJwtValid(token)) {
			const email = this.getEmail(token)
			await commit('auth/setEmail', {email})
			commit('auth/setToken', {token, refresh_token})
			await dispatch('auth/fetchProfile')
			await dispatch('favorites/fetch')
		} else if (refresh_token) {
			//commit('auth/setToken', {token: null, refresh_token})

			//await this.sendRefresh({$axios: app.$axios, store: {dispatch, commit}}, refresh_token)


		} else {
			this.logout({commit})
		}
	},
	async sendRefresh({$axios, store}, refresh_token) {

		const {token, refresh} = await $axios.$post('/token/refresh', {refresh_token})

		const email = this.getEmail(token)

		await store.commit('auth/setEmail', {email})

		store.commit('auth/setToken', {token, refresh_token: refresh})
		console.log(531351, email)
		Cookies.set('jwt', token)
		Cookies.set('refresh', refresh, {expires: 7})
		await store.dispatch('auth/fetchProfile')

		await store.dispatch('favorites/fetch')
	},
	logout({commit, $router}) {
		commit('auth/logout')
		commit('favorites/clear')
		Cookies.remove('jwt')
		Cookies.remove('refresh')
		if ($router) {
			$router.push('/')
		}

	},
	isJwtValid(token) {
		if (!token) {
			return false
		}
		const JwtData = jwtDecode(token) || null
		if (!JwtData) {
			return false
		}
		const valid = JwtData.exp * 1000 > new Date().getTime()

		return valid
	},
	getEmail(token) {
		if (!token) {
			return ''
		}
		const JwtData = jwtDecode(token) || null
		if (!JwtData) {
			return ''
		}
		console.log(354354, JwtData.username)
		return JwtData.username
	},
	showLoginModal({router}, redirect) {
		router.push({
			name: 'lk-auth', query: {redirect}
		})
	},
	async getProfileByToken({$axios}, token) {
		if (!token) {
			return ''
		}
		return $axios.$get('/profile', {
			headers: {
				authorization: `Bearer ${token}`
			}
		})

	}
}
