<template lang="pug">
	include ./c_btn.pug
</template>
<style lang="scss">
@import "c_btn.scss";
</style>
<script>
export default {
	props: {
		pd: {
			//"props data" Объект с данными для компонента
			type: Object,
			default: function () {
				return {}
			}
		},
		text: {
			//Текст на кнопке
			type: String,
			default: function () {
				return 'Кнопка'
			}
		},
		loading: {
			//Состояние загрузки
			type: Boolean,
			default: function () {
				return false
			}
		},
		tag: {
			//тег кнопки
			type: String,
			default: function () {
				return ''
			}
		},
		to: {
			default: function () {
				return false
			}
		},
		href: {
			default: function () {
				return false
			}
		},
		modList: {
			// список модификаторов для блока
			default: function () {
				return []
			}
		},
		filter: {
			type: Boolean,
			default: function () {
				return false
			}
		},
		arrow: {
			type: Boolean,
			default: function () {
				return false
			}
		},
		news_color: {
			type: String,
			default: function () {
				return ''
			}
		}
	},
	data() {
		return {
			color: this.$props.news_color
		}
	},
	computed: {
		mode() {
			let blockName = 'c-btn'
			let modes = ''
			return this.$props.modList.map(mode => modes += `${blockName}_${mode} `)
		},
		tag_computed() {
			if (this.$props.tag) {
				return this.$props.tag
			}
			if (this.$props.to) {
				return 'nuxt-link'
			}
			if (this.$attrs.type) {
				return 'button'
			}
			return 'a'
		},
		target() {
			if (this.$props.href && this.$props.href.startsWith('http')) {
				return '_blank'
			}
			return false
		}
	},
}
</script>

