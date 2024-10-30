<template lang="pug">
	include ./b_text.pug
</template>
<style lang="scss">
@import "b_text.scss";
</style>
<script>
export default {
	props: {
		pd: {
			//"props data" Объект с данными для компонента
			type: Object,
			default: function () {
				return {}
			},
		}
	},
}
</script>

