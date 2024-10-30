<template lang="pug">
	.layout
		.loyout__menu

		.layout__content
			nuxt()
			//b_modal_form(:pd="{form}")

</template>

<script>
import {mapGetters} from 'vuex';
//import b_modal_form from "@/components/b_modal_form/b_modal_form";
import FormFieldsRepository from "@/repository/FormFieldsRepository";

export default {
	components: {
		//b_modal_form
	},
	async fetch({store, params}) {

	},
	data() {
		return {

			form: {
				title: 'Напишите нам',
				text: 'Мы поможем',
				btnText: 'Отправить',
				fields: FormFieldsRepository.getForms()['message']
			},
			observer: null
		}
	},
	computed: {
		...mapGetters({
			settings: 'settings/settings',
			themeBodyClass: 'theme/bodyClass',
			themeName: 'theme/currentName'
		}),
	},
	methods: {
		onclose() {
			this.setVideoId(null)
		},
		setVideoId(n) {
			this.$store.commit('video/setVideoId', n)
		},
		setViewportProperty(doc, cssVarName) {
			var prevClientHeight;
			var customVar = '--' + (cssVarName || 'vh');

			function handleResize() {
				var clientHeight = doc.clientHeight;
				if (clientHeight === prevClientHeight) return;
				requestAnimationFrame(function updateViewportHeight() {
					doc.style.setProperty(customVar, (clientHeight * 0.01) + 'px');
					prevClientHeight = clientHeight;
				});
			}

			handleResize();
			return handleResize;
		}
	},
	mounted: function () {
		console.log('l mounted')
		if (process.browser) {
			window.$ = $
			window.addEventListener('resize', this.setViewportProperty(document.documentElement));

			//SmoothScroll()

			if (window.location.search == '?backstop') {
				$(".page").addClass("backstop");
			}


		}

	},
	beforeDestroy() {
		window.removeEventListener('resize', this.setViewportProperty(document.documentElement));


	},
	head() {
		return {
			meta: [
				{name: 'theme-color', content: this.themeName == 'light' ? '#DEDEDE' : '#282B34'},
				{name: 'twitter:card', content: 'summary'},
				{name: 'twitter:title', content: this.settings['og_title']},
				{name: 'twitter:description', content: this.settings['og_desc']},
				{property: 'og:site_name', content: this.settings['og_sitemane']},
				{property: 'og:title', content: this.settings['og_title']},
				{property: 'og:description', content: this.settings['og_desc']},
				{property: 'og:image', content: this.settings['og_img']},
				{property: 'twitter:image', content: this.settings['og_img']},
			],

			script: [
				{src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js'},

			],
			bodyAttrs: {},
			link: [
				//{ rel: 'prefetch', href: '/fonts/graphik-lcg/graphiklcg-medium.woff2' },

			]
		}

	}

}
</script>

<style lang="scss">


</style>
