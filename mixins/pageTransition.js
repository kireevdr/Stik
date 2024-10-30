import randomInteger from "../helpers/randomInteger";

export default {
	transition(to, from) {
		if (window.scrollY > 600) {
			return ''
		}
		if (to?.name == 'menu' || from?.name == 'menu') {
			if (window.innerHeight < 800) {
				return {
					name: 'overlay-left-full',
					mode: 'out-in'
				}
			} else {
				return 'slide'
			}
			//return window.innerHeight < 800 ? "overlay-left-full" : 'slide'
		}
		if (to?.name == 'story-slug') {

			return {
				name: 'fade',
				mode: ''
			}
		}
		if (window.innerHeight < 800) {
			return {
				name: 'fade',
				mode: ''
			}
		}
		return randomInteger(0, 1) ? 'slide-up' : 'slide-right'
	}
}

