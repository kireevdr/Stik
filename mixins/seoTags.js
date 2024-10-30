export default {

	head() {
		return {
			title: this.page?.title || '',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: this.page?.description || ''
				}
			],
		}
	},
}
