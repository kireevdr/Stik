export default {
	data() {
		return {
			scene: null,
			scene2: null
		}
	},
	mounted() {
		if (process.browser) {
			if (window.outerWidth > 0 && this.startAnimation) {
				this.startAnimation()
			}
		}
	},
	destroyed() {
		if (this.scene) {
			this.$scrollmagic.removeScene(this.scene)
		}
		if (this.scene2) {
			this.$scrollmagic.removeScene(this.scene2)
		}
	}
}
