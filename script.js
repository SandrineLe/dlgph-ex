// Burger Menu


(function() {

	let hamburger = {
		ul: document.querySelector('#burger'),
		ulToggle: document.querySelector('.burger-toggle'),

		initialize() {
			this.ulToggle.addEventListener('click',
        () => { this.toggle(); });
		},

		toggle() {
			this.ulToggle.classList.toggle('expanded');
			this.ul.classList.toggle('expanded');
		},
	};

	hamburger.initialize();

}());

