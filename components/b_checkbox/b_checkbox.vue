<template lang="pug">
	include ./b_checkbox.pug
</template>
<style lang="scss">
@import "b_checkbox.scss";
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
		options: {
			type: Array,
			default: function () {
				return []
			}
		},
		value: {
			default: function () {
				return ''
			}
		},
		type: {
			type: String,
			default: function () {
				return 'checkbox'
			}
		},
		text: {
			type: String,
			default: function () {
				return 'text'
			}
		},
		modList: {
			type: Array,
			default: function () {
				return []
			}
		},
		check: {
			type: Boolean,
			default: function () {
				return false
			}
		}
	},
	computed: {
		localValue: {
			get() {
				return this.$props.value
			},
			set(v) {
				this.$emit('input', v)
			}
		},
		mode() {
			let blockName = 'b-checkbox'
			let modes = ''
			return this.$props.modList.map(mode=> modes+= `${blockName}_${mode} `)
		},
	},
}
</script>

