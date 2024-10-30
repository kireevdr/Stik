<template lang="pug">
	include ./b_404.pug
</template>
<style lang="scss">
@import "b_404.scss";
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
		}
	},
}
</script>

