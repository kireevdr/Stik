import auth from "@/servises/auth";

export default function ({$axios, redirect, store}) {
	$axios.interceptors.request.use(async req => {
		let token = store.getters['auth/token']
		const refresh_token = store.getters['auth/refresh']

		if (token) {
			console.log(req.url)
			// if (refresh_token && req.url != '/token/refresh') {
			// 	await auth.sendRefresh({$axios, store})
			// }
			if (auth.isJwtValid(token)) {
				req.headers.common.Authorization = `Bearer ${store.getters['auth/token']}`
			}
		}
		return req
	})

	$axios.onError(error => {
		const code = parseInt(error.response && error.response.status)
		if (code === 500) {
			console.log('Сервер вернул 500')
		}
	})
}
