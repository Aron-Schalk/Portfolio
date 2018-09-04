// Pageswap mobile
export default class pageSwap {
	constructor() {
		this.elements = {
			aboutpage: document.querySelector('.about-page'),
			portfoliopage: document.querySelector('.portfolio-page'),
			navbar: {
				about: document.querySelector('.about__titlebar'),
				portfolio: document.querySelector('.portfolio__titlebar'),
			},
		};

		this.elements.dropdown.arrow.addEventListener('click', this.toggleMobile.bind(this));
	}

	hide() {
		this.elements.slider.classList.remove('header-slider--show');
	}

	show() {
		this.elements.slider.classList.add('header-slider--show');
	}
}
