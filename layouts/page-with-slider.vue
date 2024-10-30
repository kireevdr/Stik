<template lang="pug">
	div
		keep-alive
			nuxt


		b-modal(id="login" hide-footer size='xs')
			//b_login


</template>

<script>
import $ from 'jquery'
import {mapGetters} from 'vuex';

export default {
	components: {


		//b_modal_form: () => import('~/components/b_modal_form/b_file_input.vue'),

		// b_video_modal: () => import('~/components/b_video_modal/b_video_modal.vue'),
	},
	async fetch({store, params}) {

	},
	data() {
		return {

			callmeForm: {
				title: 'Задать вопрос',
				fields: ['name', 'tel', 'message'],
				action: '/bid'
			}
		}
	},
	computed: {
		...mapGetters({
			settings: 'settings/settings'
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
		if (process.browser) {
			window.$ = $
			window.addEventListener('resize', this.setViewportProperty(document.documentElement));
		}

	},
	beforeDestroy() {
		window.removeEventListener('resize', this.setViewportProperty(document.documentElement));
	},
	head() {
		return {
			meta: [
				{name: 'twitter:card', content: 'summary'},
				{name: 'twitter:title', content: this.settings['og_title']},
				{name: 'twitter:description', content: this.settings['og_desc']},
				{property: 'og:site_name', content: this.settings['og_sitemane']},
				{property: 'og:title', content: this.settings['og_title']},
				{property: 'og:description', content: this.settings['og_desc']},
				{property: 'og:image', content: this.settings['og_img']},
				{property: 'twitter:image', content: this.settings['og_img']},
			]
		}

	}

}
</script>

