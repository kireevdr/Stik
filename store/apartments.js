export const state = () => ({
	view: 'grid',
	viewItems: [
		{
			name: 'grid',
			icon: 'grid'
		},
		{
			name: 'list',
			icon: 'list'
		}
	],
	apartaments: [],
	limit: 8,
	page: 1,
	currentFilter: [],
	defaultFilter: [],
	sort: {
		value: {
			name: '',
			dir: '',
		},
		optionSelect: [
			{
				text: 'Сначала с меньшей площадью',
				value: 'area'
			},
			{
				text: 'Сначала с большей площадью',
				value: '-area'
			},
			{
				text: 'Сначала с меньшей ценой',
				value: 'price'
			},
			{
				text: 'Сначала с большей ценой',
				value: '-price'
			},
			{
				text: 'Сначала с меньшим этажем',
				value: 'floor'
			},
			{
				text: 'Сначала с большим этажем',
				value: '-floor'
			},
			{
				text: 'Сначала с ранним сроком',
				value: 'deadline'
			},
			{
				text: 'Сначала с поздним сроком',
				value: '-deadline'
			},
		],
		optionsGrid: [
			{
				name: 'area',
				label: 'Площадь',
			},
			{
				name: 'floor',
				label: 'Этаж'
			},

			{
				name: 'price',
				label: 'Стоимость'
			},
			{
				name: 'deadline',
				label: 'Сдача'
			},
		],
		optionsList: [
			{
				name: 'area',
				label: 'Площадь'
			},
			{
				name: 'floor',
				label: 'Этаж'
			},

			{
				name: 'price',
				label: 'Стоимость'
			},
			{
				name: 'deadline',
				label: 'Сдача'
			},
		]
	}
})
export const mutations = {
	setFilter(state, data) {
		state.currentFilter = JSON.parse(JSON.stringify(data))
	},
	setDefaultFilter(state, data) {
		console.log('setDefaultFilter')
		state.defaultFilter = JSON.parse(JSON.stringify(data))
	},
	setSortName(state, name) {
		state.sort.value.name = name
	},
	setSortDir(state, dir) {
		state.sort.value.dir = dir
	},
	clearSort(state) {
		state.sort.value.name = ''
		state.sort.value.dir = ''
	},
	setView(state, name) {
		state.view = name
	},
	setApartaments(state, data) {
		if (state.page <= 1) {
			state.apartaments = data
		} else {
			state.apartaments.items = state.apartaments.items.concat(data.items)
			state.apartaments.totalCount = data.totalCount
		}
	},
	addPage(state, {n}) {
		if (n) {
			state.page = n
		} else {
			state.page += 1;
		}
	},
	setFilterFromRoute(state, queryString) {
		const setSavedFilter = function (filter, savedData) {
			if (!savedData) {
				return
			}

			filter = filter.map(n => {
				if (savedData[n.name]) {
					n.value = savedData[n.name]
				}
				return n
			})
			return filter
		}
		state.currentFilter = setSavedFilter(state.currentFilter, JSON.parse(queryString))
	},
	setSortFromRoute(state, queryString) {
		const name = queryString.split(' ')[0] || ''
		const dir = queryString.split(' ')[1] || ''
		state.sort.value = {
			name,
			dir
		}
	}
}
export const actions = {
	changeSort({dispatch, commit, state}, name) {
		console.log(54354, state.sort.value.name)
		const name_changed = state.sort.value.name !== name
		if (name_changed) {
			commit('setSortName', name)
			commit('setSortDir', 'desc')
		} else if (state.sort.value.dir == 'desc') {
			commit('setSortDir', 'asc')
		} else {
			commit('clearSort')
		}
	},
	async fetchApartaments({dispatch, commit, state, getters}) {

		const filter = state.currentFilter
		const sort = getters['sortValue']

		try {

			const filterParams = {
				skill: {},
				status_sale: 0
			}
			//console.log('12312', filter)
			filter.forEach(n => {
				if (n.type == 'select-crutch') {
					if (n.value != '') {
						let name = n.value.replace('skill[', '').replace(']', '')
						filterParams.skill[name] = 1
					}
				} else if (n.name.startsWith('skill')) {
					let name = n.name.replace('skill[', '').replace(']', '')
					filterParams.skill[name] = n.value
				} else {
					filterParams[n.name] = n.value
				}

			})

			const params = {
				_page: state.page,
				_limit: state.limit,
				filter: filterParams,
			}
			if (state.sort.value.name) {
				params._sort = state.sort.value.name
				params._direction = state.sort.value.dir
			}

			//console.log(JSON.stringify(params, null, '\t'))

			const res = await this.$axios({
				url: `apartaments`,
				method: 'get',
				params,
				//headers: {'Access-Control-Expose-Headers': 'x-total-count'},
			})
			//console.log(res)
			const data = res.data

			commit('setApartaments', data)
		} catch (e) {
			console.log(e)
			throw e
		}
	},
	async fetchItem({dispatch}, id) {
		try {
			return await this.$axios.$get(`apartament/${id}`)

		} catch (e) {
			console.log(e)
			throw e
		}
	},
	async fetchAll({dispatch}) {
		try {
			return await this.$axios.$get('apartaments?_limit=9999')

		} catch (e) {
			console.log(e)
			throw e
		}
	},
}
export const getters = {
	getApartaments: state => state.apartaments,
	limit: state => state.limit,
	filter: state => state.currentFilter,
	defaultFilter: state => JSON.parse(JSON.stringify(state.defaultFilter)),
	totalResult: state => state.apartaments.pagination.total,
	sortOptions: state => state.sort.optionsGrid,
	sortValue: state => state.sort.value,
	sortValueString: state => state.sort.value.name ? `${state.sort.value.dir == 'asc' ? '-' : ''}${state.sort.value.name}` : '',
	currentProjectId: state => state.currentFilter.find(n => n.name == 'jk')?.value,
	optionSelect: state => state.sort.optionSelect,
}
