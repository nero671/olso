/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый (не вызванный) код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
 */
import {
    isWebp,
    headerFixed,
    togglePopupWindows,
    addTouchClass,
    addLoadedClass,
    Tabs,
    submitForm,
    addFav,
    fixCatalog,
    fixArrow,
    enterBtnHandler,
    showPassSwitcher,
    cartSwitcher,
    orderExpressSwitch,
    chooseSpot, fileImg, cookies, fixMenu, catalogMenuScroll, cartAddDetail
} from './modules';

// import BurgerMenu from './modules/BurgerMenu';

// import Tabs from 'modules/Tabs';

// import { MousePRLX } from './libs/parallaxMouse'

// import AOS from 'aos'

import Swiper, {Autoplay, Navigation, Pagination} from 'swiper';
import {dropdown} from "./modules/dropdown.js";
import {useAccordion} from "./modules/accordion.js";
import {
    accountOrderLink,
    accountOrderLinks, accountOrders,
    cardAccordion,
    content,
    filterAccordion,
    goodsSlider,
    headerCatalogAccordion,
    orderPersonalInfoContent,
    orderPersonalInfoSwitch,
    orderPersonalInfoSwitcher,
    popupContent,
    popupTab,
    popupTabs
} from "./helpers/elementsNodeList.js";
import {search} from "./modules/search.js";
import {customSelect} from "./modules/customSelect.js";
import {tabs} from "./modules/tabs.js";
import validationForm, {formValidation} from "./modules/validationForm.js";
import {counter} from "./modules/counter.js";


Swiper.use([Navigation]);
Swiper.use([Pagination]);
Swiper.use([Autoplay]);



var mainSwiper = new Swiper('.intro-section-slider', {
    slidesPerView: 1,
    speed: 600,
    spaceBetween: 10,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    // direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
});

var detailSwiper = new Swiper('.card-detail__img-slider', {
    slidesPerView: 1,
    speed: 600,
    spaceBetween: 10,

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },

});

goodsSlider.forEach((item) => {
    const sliderId = item.closest('.slider-goods').dataset.sliderId;

    var sliderGood = new Swiper(item, {
        slidesPerView: 4,
        speed: 600,
        spaceBetween: 4,
        navigation: {
            prevEl: `.slider-arrow-prev[data-slider-id="${sliderId}"]`,
            nextEl: `.slider-arrow-next[data-slider-id="${sliderId}"]`
        },
        breakpoints: {
            320: {
                slidesPerView: 1.2,
            },
            600: {
                slidesPerView: 2,
            },
            1350: {
                slidesPerView: 4,
            },
            2000: {
                slidesPerView: 6,
            }
        }

    });
});


/* Проверка поддержки webp, добавление класса webp или no-webp для HTML
 ! (i) необходимо для корректного отображения webp из css
 */
isWebp();

/* Добавление класса touch для HTML если браузер мобильный */
// addTouchClass();

/* Добавление loaded для HTML после полной загрузки страницы */
// addLoadedClass();

/* Модуль для работы с меню (Бургер) */
// new BurgerMenu().init();

/**
 *  Библиотека для анимаций
 *  документация: https://michalsnik.github.io/aos
 */
// AOS.init();

/** Параллакс мышей */
// const mousePrlx = new MousePRLX({});

/** Фиксированный header */
// headerFixed();

/**
 *  Открытие/закрытие модальных окон
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * И на кнопку, которая вызывает окно так же повешай атрибут data-type="<название окна>"

 * На обертку(враппер) окна добавь класс _overlay-bg
 * На кнопку для закрытия окна добавь класс button-close
 */
togglePopupWindows();

// const tabs = new Tabs('default-tabs', {});

dropdown();
search();
useAccordion(headerCatalogAccordion);
addFav();
customSelect();
useAccordion(filterAccordion);
fixCatalog();
fixArrow();
useAccordion(cardAccordion);
tabs(popupTabs,popupTab,popupContent);
enterBtnHandler();
showPassSwitcher();
formValidation();
counter();
cartSwitcher();
tabs(orderPersonalInfoSwitcher, orderPersonalInfoSwitch, orderPersonalInfoContent);
orderExpressSwitch();
chooseSpot();
tabs(accountOrderLinks, accountOrderLink, accountOrders);
fileImg();
cookies();
fixMenu();
catalogMenuScroll();
cartAddDetail();

