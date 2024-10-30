<template lang="pug">
	include page_footer
</template>
<style lang="scss">
@import "page_footer";
</style>
<script>
import SlideUpDown from "vue-slide-up-down";
export default {
	props: ['pd'],
	components: {
		SlideUpDown,
	},
	data() {
		return {
			formEmail: 'b-form-control__footer',
			isOpen: [],
			swiperOptionsTop: {
				pagination: {
					el: ".swiper-pagination",
				},
				loopedSlides: 5, // looped slides should be the same
				spaceBetween: 10,
				navigation: {},
				on: {
					slideChange: function () {
						let activeIndex = this.activeIndex + 1;
						$(`.gallery-thumbs .swiper-slide`).removeClass('thumbs-active')
						$(`.gallery-thumbs .swiper-slide:nth-child(${activeIndex})`).addClass('thumbs-active')
					},
					init: function () {
						let activeIndex = this.activeIndex + 1;
						$(`.gallery-thumbs .swiper-slide`).removeClass('thumbs-active')
						$(`.gallery-thumbs .swiper-slide:nth-child(${activeIndex})`).addClass('thumbs-active')
					}
				},
		},
	methods: {
		onClick(id) {
			if (this.isOpen.includes(id)) {
				this.isOpen = this.isOpen.filter(n => n != id)
			} else {
				this.isOpen.push(id)
			}
			console.log('onClick')
		},
		checkIsOpen(id) {
			if (process.browser) {
				if(window.innerWidth < 550) {
					return this.isOpen.includes(id)
				} else {
					return true
				}
			}
			return false
		},

	},
	// computed: {
	// 	data() {
	// 		return console.log(this)
	// 	}
	// }

}
</script>

<script>
import SlideUpDown from "vue-slide-up-down";
export default {
	props: ['pd'],
	components: {
		SlideUpDown,
	},
	data() {
		return {
			formEmail: 'b-form-control__footer',
			isOpen: [],
		}
	},
	methods: {
		onClick(id) {
			if (this.isOpen.includes(id)) {
				this.isOpen = this.isOpen.filter(n => n != id)
			} else {
				this.isOpen.push(id)
			}
			console.log('onClick')
		},
		checkIsOpen(id) {
			if (process.browser) {
				if(window.innerWidth < 550) {
					return this.isOpen.includes(id)
				} else {
					return true
				}
			}
			return false
		},

	},
	// computed: {
	// 	data() {
	// 		return console.log(this)
	// 	}
	// }

}
</script>
