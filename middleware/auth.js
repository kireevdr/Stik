export default function ({store, redirect, route}) {
	if (!store.getters['auth/isAuth'] && route.path != '/lk/auth') {
		return redirect(`/lk/auth?redirect=${route.path}`)
	}
}
