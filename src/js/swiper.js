
const swiper = function () {
	new Swiper('.swiper-brands', {
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			dynamicBullets: true,
		},

		slidesPerView: 'auto',
		spaceBetween: 16,
		loop: true,
		loopedSlides: 10,
	});
}


document.addEventListener('DOMContentLoaded', () => {
	const width = window.innerWidth
	if (width < 768) {
		swiper();
	} 
})

let showButton = document.querySelector('.swiper-brands__show-all-btn');
let hideButton = document.querySelector('.swiper-brands__hide-btn');
let swiperWrapper = document.querySelector('.swiper-brands__wrapper');



showButton.addEventListener('click', () => {
	swiperWrapper.classList.remove('swiper-brands__wrapper--overflow-hidden');
	showButton.classList.add('btn--hidden');
	hideButton.classList.remove('btn--hidden');
})

hideButton.addEventListener('click', () => {
	swiperWrapper.classList.add('swiper-brands__wrapper--overflow-hidden');
	showButton.classList.remove('btn--hidden');
	hideButton.classList.add('btn--hidden');
})