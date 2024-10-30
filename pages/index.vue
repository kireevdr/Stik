<template lang="pug">
	.page
		.page__header
			page_header
		.page__wrapper
			.page__b_basic
				b_basic
		.page__footer
			page_footer

</template>

<script>
import seoTags from "@/mixins/seoTags";

import page_footer from "@/components/page_footer/page_footer";

import page_header from "@/components/page_header/page_header";

import b_basic from "@/components/b_basic/b_basic";


export default {
	mixins: [seoTags],
	components: {
		page_header,
		page_footer,
		b_basic,
	},
	async asyncData({store, app, route}) {
		// let slug = route.params.slug;
		// if(!slug) {
		// 	slug = 'main'
		// }
		// const page = await app.$axios.$get(`page/${slug}`)
		// return {
		// 	page: page.data
		// }
	},
	async fetch({store, params}) {

	},

	data() {
		return {

		}
	},
	computed: {

	},
	mounted() {

	},
	beforeDestroy() {

	},
	methods: {},


}
</script>

<style lang="scss">

</style>
