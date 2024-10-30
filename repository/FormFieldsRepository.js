export default {
	getForms() {
		return {
			bron: {
				title: 'Заявка на квартиру',
				type: 'message',
				text: 'Оставьте Ваши контакты и наши менеджеры обязательно свяжутся с Вами',
				fields: [
					{
						type: 'text',
						name: 'name',
						label: 'Имя'
					},
					{
						type: 'tel',
						name: 'tel',
						label: 'Телефон',
						required: true
					},
					{
						type: 'email',
						name: 'email',
						label: 'Email'
					},
					{
						type: 'message',
						name: 'message',
						value: 'Интересует квартира №30 в ГП-3'
					}
				],
				agreement: true
			},
			'bron-parking': {
				title: 'Заявка на паркинг',
				type: 'message',
				text: 'Оставьте Ваши контакты и наши менеджеры обязательно свяжутся с Вами',
				fields: [
					{
						type: 'text',
						name: 'name',
						label: 'Имя'
					},
					{
						type: 'tel',
						name: 'tel',
						label: 'Телефон',
						required: true
					},
					{
						type: 'email',
						name: 'email',
						label: 'Email'
					},
					{
						type: 'message',
						name: 'message',
						value: 'Интересует паркинг №30 в ГП-3'
					}
				],
				agreement: true
			},
			call: {
				title: 'Перезвоните мне',
				type: 'call',
				text: 'Оставьте Ваши контакты и наши менеджеры обязательно свяжутся с Вами',
				fields: [
					{
						type: 'text',
						name: 'name',
						label: 'Ваше имя'
					},
					{
						type: 'tel',
						name: 'tel',
						label: 'Ваш телефон',
						required: true
					}
				],
				agreement: true
			},
			file: {
				title: 'Перезвоните мне',
				type: 'file',
				text: 'Оставьте Ваши контакты и наши менеджеры обязательно свяжутся с Вами',
				fields: [
					{
						type: 'text',
						name: 'name',
						label: 'Ваше имя'
					},
					{
						type: 'tel',
						name: 'tel',
						label: 'Ваш телефон',
						required: true
					},
					{
						type: 'email',
						name: 'email',
						label: 'Email'
					},
					{
						type: 'file',
						name: 'file',
						label: 'Прикрепите резюме',
						required: true
					}
				],
				agreement: true
			},
			parking: {
				title: 'Перезвоните мне',
				type: 'parking',
				text: 'Оставьте Ваши контакты и наши менеджеры обязательно свяжутся с Вами',
				fields: [
					{
						type: 'text',
						name: 'name',
						label: 'Ваше имя'
					},
					{
						type: 'tel',
						name: 'tel',
						label: 'Ваш телефон',
						required: true
					}
				],
				agreement: true
			},
			partner: {
				title: 'Перезвоните мне',
				type: 'partner',
				text: 'Оставьте Ваши контакты и наши менеджеры обязательно свяжутся с Вами',
				fields: [
					{
						type: 'text',
						name: 'name',
						label: 'Ваше имя'
					},
					{
						type: 'tel',
						name: 'tel',
						label: 'Ваш телефон',
						required: true
					},
					{
						type: 'email',
						name: 'email',
						label: 'Ваше Email'
					},
					{
						type: 'radio-group',
						radio: "radio",
						name: 'category',
						label: 'К какой категории относится ваша организация?',
						options: [{"value": "Землевладелец", "text": "Землевладелец"}, {
							"value": "Действующий застройщик",
							"text": "Действующий застройщик",
						},{"value": "Агентство", "text": "Агентство"}],
						value: []
					},
					{
						type: 'radio-group',
						name: 'category',
						radio: "radio",
						label: 'Являетесь ли вы владельцем земельного участка?',
						options: [{"value": "Не являюсь", "text": "Не являюсь"}, {
							"value": "Являюсь",
							"text": "Являюсь",
						}],
						value: []
					},
				],
				agreement: true
			},
			write: {
				title: 'Напишите нам',
				type: 'message',
				text: 'Оставьте Ваши контакты и наши менеджеры обязательно свяжутся с Вами',
				fields: [
					{
						type: 'text',
						name: 'name',
						label: 'Имя',
						required: true
					},
					{
						type: 'tel',
						name: 'tel',
						label: 'Телефон',
						required: true
					},
					{
						type: 'textarea',
						name: 'message',
						label: 'Ваше сообщение',
						required: true
					}
				],
				agreement: true
			},
			visit: {
				title: 'Записаться на встречу',
				type: 'message',
				text: 'Оставьте Ваши контакты и наши менеджеры обязательно свяжутся с Вами',
				fields: [
					{
						type: 'text',
						name: 'name',
						label: 'Имя',
						required: true
					},
					{
						type: 'tel',
						name: 'tel',
						label: 'Телефон',
						required: true
					},
					{
						type: 'textarea',
						name: 'message',
						label: 'Ваше сообщение',
						required: true
					}
				],
				agreement: true
			},
		}
	}
}
