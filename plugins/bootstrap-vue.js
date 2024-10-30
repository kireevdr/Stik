import Vue from 'vue';
import {BModal, BTab, BTabs, BToast, BToaster, ToastPlugin, VBModal} from 'bootstrap-vue'


Vue.use(ToastPlugin)
Vue.component('b-modal', BModal)
Vue.component('b-toast', BToast)
Vue.component('b-toaster', BToaster)
Vue.directive('b-modal', VBModal)
Vue.component('b-tabs', BTabs)
Vue.component('b-tab', BTab)
