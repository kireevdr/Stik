<template lang="pug">
	include ../node_modules/bemto.pug/bemto.pug
	.page
		.page__header
			page_header
		.page__404
			b_404
		.page_footer
			page_footer


</template>
<script>
import page_header from "../components/page_header/page_header";
import page_footer from "../components/page_footer/page_footer";
import b_404 from "../components/b_404/b_404";

export default {
	components: {
		page_header,
		b_404,
		page_footer,
	}
}
</script>
