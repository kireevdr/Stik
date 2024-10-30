<template lang="pug">
	div
		include ./vue_selectric.pug

</template>

<style lang="scss">
@import "~selectric/src/selectric";
@import "vue_selectric";
</style>
<script>
import $ from 'jquery'

export default {
	props: {
		options: {
			type: Array,
			default: function () {
				return []
			}
		},
		value: {
			type: String,
			default: function () {
				return ''
			}
		},
		name: {
			type: String,
			default: function () {
				return ''
			}
		},
		modList: {
			// список модификаторов для блока
			default: function () {
				return []
			}
		},
		emptyOption: {
			default: function () {
				return null
			}
		},
		required: {
			type: Boolean,
			default: function () {
				return false
			}
		},
	},
	data: function () {
		return {
			locValue: this.$props.value
		}
	},
	computed: {
		mode() {
			let blockName = 'vue-selectric'
			let modes = ''
			return this.$props.modList.map(mode=> modes+= `${blockName}_${mode} `)
		},
	},
	methods: {
		onSortSelectChange(v) {

		},
		async init() {
			window.$ = $
			window.jQuery = $
			const lib = require('!raw-loader!selectric')
			window.eval(lib.default)
			const self = this
			$(this.$refs.select)
				.selectric()
				.on('change', function (e) {
					const value = e.target.value
					self.locValue = value
					self.onChange(value)
				})
		},
		onChange(value) {
			this.$emit('input', this.locValue)
		},
		setInitValueFromOptions() {
			if (!this.locValue) {
				try {
					const newValue = this.$props.emptyOption?.val || this.$props.options[0].val
					if (newValue) {
						this.locValue = newValue
						this.onChange()
					}
				} catch (e) {

				}
			}
		}

	},
	mounted: function () {

		if (process.browser) {
			if (!this.$props.emptyOption) {
				this.setInitValueFromOptions()
			}

			this.init()
		}

	},
	watch: {
		value(value) {
			this.locValue = value
			$(this.$refs.select).val(value).selectric('refresh')
		},
		options(v) {
			this.$nextTick(() => {
				if (!this.$props.emptyOption) {
					this.locValue = null

					this.setInitValueFromOptions()

					this.locValue = v[0].value
					console.log(123, this.locValue)
					$(this.$refs.select).val(v[0].value).selectric('refresh')
					this.onChange()
				}

			})

		}
	},
}
</script>

