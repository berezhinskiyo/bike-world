
const roadLink = document.querySelector('#road-link');
const gravelLink = document.querySelector('#gravel-link');
const ttLink = document.querySelector('#tt-link');
const bikeFirstImg = document.querySelector('#bike-first-img');
const bikeFirstName = document.querySelector('#bike-first-name');
const bikeSecondImg = document.querySelector('#bike-second-img');
const bikeSecondName = document.querySelector('#bike-second-name');
const bikeThirdImg = document.querySelector('#bike-third-img');
const bikeThirdName = document.querySelector('#bike-third-name');

const bikeSelect = document.querySelector('#select');

const bikesItems = document.querySelectorAll('.bikes__slider__item');

const bikeType = document.querySelector('.bike-type');
const bikeTypeTitle = bikeType.querySelector('.section-title');
const bikeTypeText = bikeType.querySelector('.section-text');

const icon = document.querySelector('.bike-type__slider__image__icon');

const prev = document.querySelector('.bike-type__button-bar__button_left');
const next = document.querySelector('.bike-type__button-bar__button_right');

const footerSearchBtn = document.querySelector('.footer__form__input-box__btn');
const footerSearchInput = document.querySelector('.footer__form__input-box__input');

const headerButton = document.querySelector('.header__button');

headerButton.addEventListener('click', () => {
 
});

footerSearchInput.addEventListener('input', () => {
	if (footerSearchInput.value.length > 0) {
		footerSearchBtn.style.visibility = 'visible';
	} else {
		footerSearchBtn.style.visibility = 'hidden';
	}
});
footerSearchBtn.addEventListener('click', () => {

	if (footerSearchInput.value.length > 0) {
		footerSearchInput.value = '';
		footerSearchInput.placeholder = 'Круто!'
		footerSearchBtn.style.visibility = 'hidden';
	}
});


const swiper = new Swiper(".bike-type", {
	slidesPerView: 2,
	spaceBetween: 40,
	breakpoints: {
		0: {
			slidesPerView: 1,
			spaceBetween: 0
		},
		321: {
			slidesPerView: 2,
			spaceBetween: 40
		}
	},
	cssMode: true,
	mousewheel: false,
	keyboard: false,
	loop: true
});



const swiperBike = new Swiper(".bikes", {
	slidesPerView: 3,
	spaceBetween: 0,
	breakpoints: {
		0: {
			slidesPerView: 1,
			spaceBetween: 0,
			pagination: {
				el: ".bike-type__swiper-pagination",
			}
		},
		321: {
			slidesPerView: 3,
			spaceBetween: 0
		}
	},
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


function roadLinkInit() {
	bikeFirstImg.style.backgroundImage = "url('./images/road-bike_cervedo.png')";
	bikeFirstName.innerText = 'Cervelo Caledonia-5';
	bikeSecondImg.style.backgroundImage = "url('./images/road-bike_cannondale.png')";
	bikeSecondName.innerText = 'Cannondale Systemsix Himod';
	bikeThirdImg.style.backgroundImage = "url('./images/road-bike_trek.png')";
	bikeThirdName.innerText = 'Cannondale Systemsix Himod';
	bikesItems[0].href = 'https://www.sigmasports.com/item/Cervelo/Caledonia-5-Ultegra-Disc-Road-Bike-2021/RDEN';
	bikesItems[1].href = 'https://www.sigmasports.com/item/Cannondale/SystemSix-HiMOD-Ultegra-Di2-Disc-Road-Bike-2021/R82J	';
	bikesItems[2].href = 'https://www.sigmasports.com/item/Cannondale/SystemSix-HiMOD-Ultegra-Di2-Disc-Road-Bike-2021/R82J';

	activateLink(roadLink);
	deactivateLink(gravelLink);
	deactivateLink(ttLink);
}
function gravelLinkInit() {
	bikeFirstImg.style.backgroundImage = "url('./images/gravel_carvelo.png')";
	bikeFirstName.innerText = 'Cervelo Aspero GRX 810';
	bikeSecondImg.style.backgroundImage = "url('./images/gravel-specialized.png')";
	bikeSecondName.innerText = 'Specialized S-Works Diverge';
	bikeThirdImg.style.backgroundImage = "url('./images/gravel_cannpndale.png')";
	bikeThirdName.innerText = 'Cannondale Topstone Lefty 3';
	bikesItems[0].href = 'https://www.sigmasports.com/item/Cervelo/Aspero-GRX-810-1x-Disc-Gravel-Bike-2021/RJDE';
	bikesItems[1].href = 'https://www.sigmasports.com/item/Specialized/S-Works-Diverge-Gravel-Bike-2020/NVJ9';
	bikesItems[2].href = 'https://www.sigmasports.com/item/Cannondale/Topstone-Carbon-Lefty-3-Disc-Gravel-Road-Bike-2021/PUC8';


	activateLink(gravelLink);
	deactivateLink(roadLink);
	deactivateLink(ttLink);
}
function ttLinkInit() {
	bikeFirstImg.style.backgroundImage = "url('./images/tt-specialized.png')";
	bikeFirstName.innerText = 'Specialized S-Works Shiv';
	bikeSecondImg.style.backgroundImage = "url('./images/tt-bmc.png')";
	bikeSecondName.innerText = 'BMC Timemachine 01 ONE';
	bikeThirdImg.style.backgroundImage = "url('./images/tt-cervelo.png')";
	bikeThirdName.innerText = 'Cervelo P-Series';
	bikesItems[0].href = 'https://www.sigmasports.com/item/Specialized/S-Works-Shiv-Disc-Limited-Edition-Triathlon-Bike-2019/K8P9 ';
	bikesItems[1].href = 'https://www.sigmasports.com/item/BMC/Timemachine-01-One-Force-Disc-TT-Triathlon-Bike-2021/S835';
	bikesItems[2].href = ' https://www.sigmasports.com/item/Cervelo/P-Series-Ultegra-Di2-TT-Triathlon-Bike-2021/RM6Q';

	activateLink(ttLink);
	deactivateLink(roadLink);
	deactivateLink(gravelLink);
}

function initSlider() {
	roadLink.addEventListener('click', function () {
		roadLinkInit();
	});
	gravelLink.addEventListener('click', function () {
		gravelLinkInit();
	});
	ttLink.addEventListener('click', function () {
		ttLinkInit();
	});
	bikeSelect.addEventListener("change", function () {
		if (bikeSelect.value == 0) {
			roadLinkInit();
		} else if (bikeSelect.value == 1) {
			gravelLinkInit();
		} else {
			ttLinkInit();
		}
	});
}

initSlider();


