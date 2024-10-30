export default {
	mounted() {
		if (process.browser) {
			// const self = this
			// $(window).bind('DOMMouseScroll mousewheel', function (event) {
			// 	const direction = event.originalEvent.deltaY < 0 ? 'up' : "down"
			// 	const offset = $(self.$el).offset()
			// 	const scrollTop = window.scrollY
			// 	const elIsHover = scrollTop >= offset.top && scrollTop < offset.top + $(self.$el).outerHeight() -10
			// 	console.log(454643, elIsHover)
			// 	if (elIsHover && direction == 'down') {
			//
			// 		$("*").bind("mousewheel", function() {
			// 			return false;
			// 		});
			//
			// 		setTimeout(() => $("*").unbind("mousewheel"), 3000)
			//
			// 		const top = $(self.$el).offset().top + $(self.$el).outerHeight()
			//
			// 		// window.scrollTo({
			// 		// 	top: $(self.$el).offset().top + $(self.$el).outerHeight(),
			// 		// 	behavior: 'smooth'
			// 		// })
			// 		$('html').animate({ scrollTop: top }, 800);
			// 		return false;
			// 	}
			// })
		}
	}
}
