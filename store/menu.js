export const state = () => ({
	isShowMenu: false,
	items: [
		{
			text: '&#xe900; Lifestyle',
			link: '/lifestyle'
		},
		{
			text: 'Проекты',
			link: '/projects'
		},
		{
			text: 'География',
			link: '/geography'
		},
		{
			text: 'Партнеры',
			link: '/partners'
		},
		{
			text: 'Контакты',
			link: '/contacts'
		},
		{
			text: 'Документы',
			link: '/docs'
		}
	],
	links: [
		{
			text: 'Политика конфиденциальности',
			link: '/page/agreement'
		},
		{
			text: 'Публичная оферта',
			link: '/page/public-offer'
		},
		{
			text: 'Реквизиты',
			link: '/requisites'
		}
	]
})
export const mutations = {
	showMenu(state) {
		state.isShowMenu = true
	},
	hideMenu(state) {
		state.isShowMenu = false
	},
}
export const getters = {
	items: state => state.items || [],
	links: state => state.links || [],
	isShowMenu: state => state.isShowMenu
}
