import randomKey from "./randomKey";

export default class normalizeSvg {
	constructor(inlineSvg = '') {
		this.inlineSvg = inlineSvg
		this.id = randomKey()
	}

	toString() {
		return this.inlineSvg
	}

	uniqueizeIds() {
		this.inlineSvg = this.inlineSvg.replace(/id="/g, 'id="' + `svg_${this.id}_`)
		return this
	}

	uniqueizeUrls() {
		this.inlineSvg = this.inlineSvg.replace(/url\(#/g, 'url(#' + `svg_${this.id}_`)
		return this
	}

	changeColor(newColor) {
		this.inlineSvg = this.inlineSvg.replace(/\"#\w{3,6}\"/g, `"${newColor}"`)
		return this
	}
}
