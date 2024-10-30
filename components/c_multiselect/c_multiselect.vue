<template lang="pug">
	include ./c_multiselect.pug
</template>
<style lang="scss">
	@import "vue-multiselect/dist/vue-multiselect.min";
	@import "c_multiselect.scss";
</style>
<script>

    export default {
		components: {
			multiselect: () => import('vue-multiselect'),
		},
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
				type: Array,
				default: function () {
					return []
				}
			},
        },
		computed: {
			localValue: {
				get() {
					let value = this.$props.value || []
					if (typeof value == 'string') {
						value = [value]
					}
					return value.map(id => this.$props.options.find(option => option.val == id))
				},
				set(newValue) {
					const v = newValue.map(n => n.val)
					this.$emit('input', v)
				}
			}
		}
    }
</script>

