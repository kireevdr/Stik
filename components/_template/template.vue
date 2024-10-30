<template lang="pug">
	include ./__name__.pug
</template>
<style lang="scss">
@import "__name__.scss";
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

