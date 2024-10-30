export default {
	counterId: '61506187',
	reachGoal(name) {
		if (!process.browser) {
			return
		}


		const ym = window['yaCounter' + this.counterId]
		if (!ym) {
			return
		}
		ym.reachGoal(name)
		console.log('цель отправлена', name)


	},

}
