import normalizeTel from "../helpers/normalizeTel";

export default {
	data() {
		return {
			senks: null,
			errors: [],
			btnLoader: false,
		}
	},
	methods: {
		validate(fd) {
			this.errors = []
			const tel = fd.get('tel').replace(/\D+/g, "")

			if (tel.length < 11) {
				this.errors.push('Необходим телефон длиной 11 символов')
			}

			if (!tel.startsWith('79')) {
				this.errors.push('Необходим телефон, который начинается с +79')
			}

			return this.errors == 0
		},
		async onSubmit($event) {

			let fd = new FormData($event.target);

			if (fd.get('tel')) {
				const tel = fd.get('tel')
				fd.set('tel', normalizeTel(tel));
			}

			fd.set('type', this.type);

			if (!this.validate(fd)) {
				return
			}


			this.btnLoader = true

			let response = null
			try {
				response = await this.$axios.post('bid1', fd);
				this.senks = {
					title: 'Спасибо',
					text: "Мы свяжемся с Вами в ближайшее время"
				}
			} catch (e) {
				this.senks = {
					title: 'Ошибка',
					text: "Свяжитесь с нами по телефону"
				}
			}


			this.btnLoader = false

		},
	}
}
