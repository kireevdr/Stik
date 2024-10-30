/*
Тут происходит глобальная регистрация компонентов
* */

import Vue from 'vue'

import c_btn from "../components/c_btn/c_btn";

const components = {
	c_btn
}

Object.entries(components).forEach(([name, component]) => {
	Vue.component(name, component)
})
