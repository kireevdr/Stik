<template lang="pug">
	include b_basic
</template>
<style lang="scss">
@import "b_basic";
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
			formEmail: 'b-form-control__basic',
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
				thumbs: {
					swiper: {
						el: '.gallery-thumbs',
						slidesPerView: 5,
						spaceBetween: 10,
						touchRatio: 0.2,
						slideThumbActiveClass: 'swiper-slide-thumb-active',
						watchSlidesVisibility: true,
						watchSlidesProgress: true,
						direction: 'vertical'
					}
				}

			},
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
	mounted() {
		if (this.$refs.swiperTop && this.images.length) {
			const swiperTop = this.$refs.swiperTop.swiper
			const swiperThumbs = this.$refs.swiperThumbs.swiper
			swiperTop.controller.control = swiperThumbs
		}
		if (process.browser) {


			this.key += 1;
			const el = document.querySelectorAll('.lightgallery')
			if (el) {
				for (let i = 0; i < el.length; i++) {
					window.lightGallery(el[i], {
						selector: 'a'
					})
				}
			}

			this.sharing.data.url = window.location.href

			this.setLastSeen()
		}
	},

	// computed: {
	// 	data() {
	// 		return console.log(this)
	// 	}
	// }

}
</script>


