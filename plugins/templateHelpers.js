import Vue from 'vue'

var mixin = {
	methods: {
		_image(model, attr, size ='thumb', index=0, noPhoto='') {
			try {
				return model[attr][index][size]
			} catch (e) {
				return noPhoto
			}
		}
	}
}

Vue.mixin(mixin)
