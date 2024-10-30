import $ from 'jquery'

export default {
	methods: {
		offsetfix() {
			var context = context || 'body';
			if ($('body').width() < 991) {
				$('.js-left', context).css('margin-right', '');
				$('.js-right', context).css('margin-right', '');
				return
			}

			$('.js-right', context).each(function (i, e) {
				$(this).css('margin-right', '');
				var w = $('body').width();
				var o = $(this).offset().left;
				var iw = $(this).width();
				var d = w - o - iw;
				$(this).css('margin-right', -d);
			});
			$('.js-left', context).each(function (i, e) {
				$(this).css('margin-left', '');
				var o = $(this).offset().left;
				$(this).css('margin-left', -o);
			})
		}
	},
	mounted() {
		if (process.browser) {
			this.offsetfix()
		}
	},
	updated() {
		this.offsetfix()
	}
}
