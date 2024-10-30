export const state = () => ({
	modal: null
})
export const mutations = {
	show(state, {
		type,
		sendType,
		formTitle,
		formTitleSend,
		formSubtitle,
		apartment_id,
		content,
	}) {
		state.modal = {
			type,
			sendType: sendType || type,
			formTitle,
			formTitleSend: formTitleSend || formTitle,
			formSubtitle,
			apartment_id,
			content,
		}
	},
	hide(state) {
		state.modal = null
	},
}
export const actions = {

}
export const getters = {
	modal: state => state.modal,
}
