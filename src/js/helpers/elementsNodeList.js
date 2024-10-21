const html = document.documentElement;
const body = document.body;
const pageWrapper = document.querySelector('.page');
const header = document.querySelector('.header');
const firstScreen = document.querySelector('[data-observ]');
const burgerButton = document.querySelector('.icon-menu');
const menu = document.querySelector('.menu');
const lockPaddingElements = document.querySelectorAll('[data-lp]');
const headerCatalogAccordion = document.querySelector('.header-catalog__accordion');

const goodsSlider = document.querySelectorAll('.slider-goods-slider');
const filterAccordion = document.querySelector('.filter-accordion');
const cardAccordion = document.querySelector('.card-detail__accordion .accordion-wrapper');
const popupTabs = document.querySelector('.registration-popup__toggle');
const popupTab = document.querySelectorAll('.registration-popup__toggle_link');
const popupContent = document.querySelectorAll('.auth-popup .popup-content');

const orderPersonalInfoSwitcher = document.querySelector('.order__personal-info_switcher');
const orderPersonalInfoSwitch = document.querySelectorAll('.order__personal-info_switch');
const orderPersonalInfoContent = document.querySelectorAll('.order__personal-info-content');


const accountOrderLinks = document.querySelector('.account-order-links');
const accountOrderLink = document.querySelectorAll('.account-order-link');
const accountOrders = document.querySelectorAll('.account-orders');

export {
  html,
  body,
  pageWrapper,
  header,
  firstScreen,
  burgerButton,
  menu,
  lockPaddingElements,
  headerCatalogAccordion,
  goodsSlider,
  filterAccordion,
  cardAccordion,
  popupTabs,
  popupTab,
  popupContent,
  orderPersonalInfoSwitcher,
  orderPersonalInfoSwitch,
  orderPersonalInfoContent,
  accountOrderLinks,
  accountOrderLink,
  accountOrders
};
