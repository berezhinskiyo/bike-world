
const roadLink = document.querySelector('#road-link');
const gravelLink = document.querySelector('#gravel-link');
const ttLink = document.querySelector('#tt-link');
const bikeFirstImg = document.querySelector('#bike-first-img');
const bikeFirstName = document.querySelector('#bike-first-name');
const bikeSecondImg = document.querySelector('#bike-second-img');
const bikeSecondName = document.querySelector('#bike-second-name');
const bikeThirdImg = document.querySelector('#bike-third-img');
const bikeThirdName = document.querySelector('#bike-third-name');

const bikeType = document.querySelector('.bike-type');
const bikeTypeTitle = bikeType.querySelector('.section-title');
const bikeTypeText = bikeType.querySelector('.section-text');

const icon = document.querySelector('.bike-type__slider__image__icon');

const prev = document.querySelector('.bike-type__button-bar__button_left');
const next = document.querySelector('.bike-type__button-bar__button_right');

const swiper = new Swiper(".bike-type", {
	slidesPerView: 2,
	spaceBetween: 40,
	cssMode: true,
	mousewheel: false,
	keyboard: false,
	loop: true
});

const classList = ["url('../../../../../images/road_curve.svg')", "url('../../../../../images/gravel_curve.svg')", "url('../../../../../images/tt_curve.svg')"];
const titleList = ['Шоссе', 'Грэвел', 'ТТ'];
const textList = [
	'На шоссейном велосипеде можно ездить по асфальту на разных градиентах: будь то горы или равнины. Гонки проходят в командном пелотоне, но тренироваться можно и самостоятельно.',
	'Грэвел похож на шоссейный велосипед, но конструкция рамы немного отличается, и на нём стоят более широкие покрышки, всё для того чтобы проехать по лёгкому бездорожью.',
	'ТТ — это велосипед для триатлона или раздельного старта, гооняют на таком велике только по равнинному асфальту, велик очень быстрые и аэродинамичный.'];



var i = 0;
prev.addEventListener('click', function () {
	swiper.slidePrev();
	i++;
	var currI = Math.abs(i % 3);
	var prevI = Math.abs((i - 1) % 3);
	bikeTypeTitle.textContent = titleList[currI];
	bikeTypeText.textContent = textList[currI];
	document.documentElement.style.setProperty('--background-image', classList[currI]);

});
next.addEventListener('click', function () {
	swiper.slideNext();
	i--;
	var currI = Math.abs(i % 3);
	var prevI = Math.abs((i + 1) % 3);
	bikeTypeTitle.textContent = titleList[currI];
	bikeTypeText.textContent = textList[currI];
	document.documentElement.style.setProperty('--background-image', classList[currI]);
});

function deactivateLink(item) {
	item.classList.add('bikes__header__links__item_inactive');
}
function activateLink(item) {
	item.classList.remove('bikes__header__links__item_inactive');
}
function initSlider() {
	roadLink.addEventListener('click', function () {
		bikeFirstImg.style.backgroundImage = "url('./images/road-bike_cervedo.png')";
		bikeFirstName.innerText = 'Cervelo Caledonia-5';
		bikeSecondImg.style.backgroundImage = "url('./images/road-bike_cannondale.png')";
		bikeSecondName.innerText = 'Cannondale Systemsix Himod';
		bikeThirdImg.style.backgroundImage = "url('./images/road-bike_trek.png')";
		bikeThirdName.innerText = 'Cannondale Systemsix Himod';

		activateLink(roadLink);
		deactivateLink(gravelLink);
		deactivateLink(ttLink);
	});
	gravelLink.addEventListener('click', function () {
		bikeFirstImg.style.backgroundImage = "url('./images/gravel_carvelo.png')";
		bikeFirstName.innerText = 'Cervelo Aspero GRX 810';
		bikeSecondImg.style.backgroundImage = "url('./images/gravel-specialized.png')";
		bikeSecondName.innerText = 'Specialized S-Works Diverge';
		bikeThirdImg.style.backgroundImage = "url('./images/gravel_cannpndale.png')";
		bikeThirdName.innerText = 'Cannondale Topstone Lefty 3';

		activateLink(gravelLink);
		deactivateLink(roadLink);
		deactivateLink(ttLink);
	});
	ttLink.addEventListener('click', function () {
		bikeFirstImg.style.backgroundImage = "url('./images/tt-specialized.png')";
		bikeFirstName.innerText = 'Specialized S-Works Shiv';
		bikeSecondImg.style.backgroundImage = "url('./images/tt-bmc.png')";
		bikeSecondName.innerText = 'BMC Timemachine 01 ONE';
		bikeThirdImg.style.backgroundImage = "url('./images/tt-cervelo.png')";
		bikeThirdName.innerText = 'Cervelo P-Series';

		activateLink(ttLink);
		deactivateLink(roadLink);
		deactivateLink(gravelLink);
	});
}

initSlider();


