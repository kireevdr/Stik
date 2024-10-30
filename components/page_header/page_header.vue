<template lang="pug">
	include page_header
</template>

<script>
import vClickOutside from 'v-click-outside'
import {mapGetters} from 'vuex';
import SlideUpDown from 'vue-slide-up-down';



export default {

	components: {
		SlideUpDown,
	},
	async fetch() {

	},
	props: {
		pd: {
			//"props data" Объект с данными для компонента
			type: Object,
			default: function () {
				return {}
			}
		},
		modList: {
			type: Array,
			default: function () {
				return []
			}
		},
	},
	data() {
		return {

		}
	},

	computed: {

	},
	methods: {

	},
	mounted() {
		if (process.browser) {

		}
	},
	beforeDestroy() {

	},

}

</script>

<style lang="scss">
@import "page_header";
</style>
