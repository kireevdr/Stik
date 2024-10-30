export default {
	getFavoritesItems({store}) {//избранное
		return {
			apartaments: JSON.parse(JSON.stringify(store.getters['favorites/apartaments'])),
			parking: JSON.parse(JSON.stringify(store.getters['favorites/parking'])),
		}
	},
	getBronItems() {//бронирования
		return {
			apartaments: [
				{
					id: "1",
					sale_icon: "0",
					new_icon: "1",
					number: "14",
					count_room: "2",
					area: "61",
					price: "4551385",
					floor: "14",
					house: "Дом 2",
					plan: "https://backend.znewton.ru/uploads/plans/2021/03/53d05a2331da2b61c3da8a90a995c0fb.jpg",


					status: 'booked',
					booked_at: '22.02.2021 18:39',


					type: 'ЕВРО 3К',
					project: 'Заря',
					deadline: '3 кв. 2021',
					parking_price: 'от 200 000 ₽',
					direction_of_windows: 'север',//окна выходят
					separate_entrance: 'нет'//отдельный вход
				}, {
					id: "2",
					sale_icon: "1",
					new_icon: "0",
					number: "19",
					count_room: "1",
					area: "49",
					price: "1899400",
					floor: "19",
					house: "Дом 2",
					plan: "",

					status: 'booked',
					booked_at: '22.02.2021 18:39',
					expires_at: '22.02.2021 18:39',//когда истекает, для временной брони


					type: 'ЕВРО 3К',
					project: 'Заря',
					deadline: '3 кв. 2021',
					parking_price: 'от 200 000 ₽',
					direction_of_windows: 'север',//окна выходят
					separate_entrance: 'нет'//отдельный вход
				}, {
					id: "3",
					sale_icon: "0",
					new_icon: "1",
					number: "2",
					count_room: "3",
					area: "59",
					price: "3199782",
					floor: "2",
					house: "Дом 1",
					plan: "https://backend.znewton.ru/uploads/plans/2021/03/53d05a2331da2b61c3da8a90a995c0fb.jpg",
					status: 'booked',
					expires_at: '22.02.2021 18:39',
					type: 'ЕВРО 3К',
					project: 'Заря',
					deadline: '3 кв. 2021',
					parking_price: 'от 200 000 ₽',
					direction_of_windows: 'север',//окна выходят
					separate_entrance: 'нет'//отдельный вход
				}, {
					id: "4",
					sale_icon: "1",
					new_icon: "0",
					number: "10",
					count_room: "2",
					area: "97",
					price: "3184895",
					floor: "10",
					house: "Дом 1",
					plan: "",
					status: 'booked',
					expires_at: '22.02.2021 18:39',
					type: 'ЕВРО 3К',
					project: 'Заря',
					deadline: '3 кв. 2021',
					parking_price: 'от 200 000 ₽',
					direction_of_windows: 'север',//окна выходят
					separate_entrance: 'нет'//отдельный вход
				}, {
					id: "5",
					sale_icon: "0",
					new_icon: "0",
					number: "8",
					count_room: "2",
					area: "54",
					price: "1433977",
					floor: "8",
					house: "Дом 1",
					plan: "",
					status: 'booked',
					expires_at: '22.02.2021 18:39',
					type: 'ЕВРО 3К',
					project: 'Заря',
					deadline: '3 кв. 2021',
					parking_price: 'от 200 000 ₽',
					direction_of_windows: 'север',//окна выходят
					separate_entrance: 'нет'//отдельный вход
				}, {
					id: "6",
					sale_icon: "0",
					new_icon: "0",
					number: "12",
					count_room: "1",
					area: "46",
					price: "1132492",
					floor: "12",
					house: "Дом 2",
					plan: "",
					status: 'booked',
					expires_at: '22.02.2021 18:39',
					type: 'ЕВРО 3К',
					project: 'Заря',
					deadline: '3 кв. 2021',
					parking_price: 'от 200 000 ₽',
					direction_of_windows: 'север',//окна выходят
					separate_entrance: 'нет'//отдельный вход
				}, {
					id: "7",
					sale_icon: "0",
					new_icon: "0",
					number: "16",
					count_room: "0",
					area: "41",
					price: "4040201",
					floor: "16",
					house: "Дом 2",
					plan: "",
					status: 'booked',
					expires_at: '22.02.2021 18:39',
					type: 'ЕВРО 3К',
					project: 'Заря',
					deadline: '3 кв. 2021',
					parking_price: 'от 200 000 ₽',
					direction_of_windows: 'север',//окна выходят
					separate_entrance: 'нет'//отдельный вход
				}, {
					id: "8",
					sale_icon: "1",
					new_icon: "0",
					number: "2",
					count_room: "3",
					area: "64",
					price: "2657750",
					floor: "2",
					house: "Дом 1",
					plan: "",
					status: 'booked',
					expires_at: '22.02.2021 18:39',
					type: 'ЕВРО 3К',
					project: 'Заря',
					deadline: '3 кв. 2021',
					parking_price: 'от 200 000 ₽',
					direction_of_windows: 'север',//окна выходят
					separate_entrance: 'нет'//отдельный вход
				}],
			parking: [
				{
					id: "1",
					sale_icon: "0",
					new_icon: "1",
					number: "14",
					count_room: "2",
					area: "61",
					price: "4551385",
					floor: "14",
					house: "Дом 2",
					plan: "/img/content/parking-plan.svg",


					status: 'booked',//бронь
					booked_at: '22.02.2021 18:39'
				}
			]
		}
	},
	getPurchasedtems() {//оплаченные
		return {
			apartaments: [
				{
					id: "1",
					sale_icon: "0",
					new_icon: "1",
					number: "14",
					count_room: "2",
					area: "61",
					price: "4551385",
					floor: "14",
					house: "Дом 2",
					plan: "https://backend.znewton.ru/uploads/plans/2021/03/53d05a2331da2b61c3da8a90a995c0fb.jpg",


					status: 'purchased',//оплачено
					purchased_at: '22.02.2021 18:39'
				}
			],
			parking: [
				{
					id: "1",
					sale_icon: "0",
					new_icon: "1",
					number: "14",
					count_room: "2",
					area: "61",
					price: "4551385",
					floor: "14",
					house: "Дом 2",
					plan: "https://backend.znewton.ru/uploads/plans/2021/03/53d05a2331da2b61c3da8a90a995c0fb.jpg",


					status: 'purchased',//оплачено
					purchased_at: '22.02.2021 18:39'
				}
			]
		}
	},
	getUserData() {//данные профиля
		return {
			name: 'Константин',
			surname: 'Константинопольский',
			patronymic: 'Иванович',
			avatar: '/img/content/author.jpg',
			birthday: '18.12.1987',
			gender: 'man',
			tel: '+7 912 876 78 53',
			email: 'info@yandex.ru',
			city: 'Тюмень',
			car: '1',
			children_ages: '0-6, 6-12, 12-18',
			comment: ''
		}
	},
	getMenu() {
		return [
			{
				text: 'Бронирования',
				link: '/lk/bron'
			},
			{
				text: 'Избранное',
				link: '/lk/favorites'
			},
			{
				text: 'Оплаченное',
				link: '/lk/purchased'
			},
			{
				text: 'Мои данные',
				link: '/lk/profile'
			},
			{
				text: 'Обратная связь',
				link: '/lk/support'
			},
		]
	}

}
