import AOS from "aos";

import "aos/dist/aos.css";
import throttle from 'lodash/throttle'

const refresh = function () {
	console.log('refresh')
	AOS.refresh()
}

const throttled_AOS_refresh = throttle(refresh, 1000)

// trigger when the Nuxt page is ready
window.onNuxtReady(() => {
	throttled_AOS_refresh()
})


window.throttled_AOS_refresh = throttled_AOS_refresh
window.AOS = AOS


export default ({app}) => {
	app.AOS = new AOS.init({
		startEvent: 'load',
		offset: 50,
		delay: 0,
		duration: 600,
	});


};
