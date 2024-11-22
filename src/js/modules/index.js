import toggleBodyLock from './../helpers/toggleBodyLock';
import {html, firstScreen, header, popupTabs} from './../helpers/elementsNodeList';

// Проверка браузера на поддержку .webp изображений ======================================================
function isWebp() {
  // Проверка поддержки webp
  const testWebp = (callback) => {
    const webP = new Image();

    webP.onload = webP.onerror = () => callback(webP.height === 2);
    webP.src =
      'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  };

  // Добавление класса _webp или _no-webp для HTML
  testWebp((support) => {
    const className = support ? 'webp' : 'no-webp';
    html.classList.add(className);

    console.log(support ? 'webp поддерживается' : 'webp не поддерживается');
  });
}

/* Проверка мобильного браузера */
const isMobile = {
  Android: () => navigator.userAgent.match(/Android/i),
  BlackBerry: () => navigator.userAgent.match(/BlackBerry/i),
  iOS: () => navigator.userAgent.match(/iPhone|iPad|iPod/i),
  Opera: () => navigator.userAgent.match(/Opera Mini/i),
  Windows: () => navigator.userAgent.match(/IEMobile/i),
  any: () =>
    isMobile.Android() ||
    isMobile.BlackBerry() ||
    isMobile.iOS() ||
    isMobile.Opera() ||
    isMobile.Windows(),
};

/* Добавление класса touch для HTML если браузер мобильный */
function addTouchClass() {
  // Добавление класса _touch для HTML если браузер мобильный
  if (isMobile.any()) {
    html.classList.add('touch');
  }
}

// Добавление loaded для HTML после полной загрузки страницы
function addLoadedClass() {
  window.addEventListener('load', () => {
    setTimeout(() => {
      html.classList.add('loaded');
    }, 0);
  });
}

// Получение хеша в адресе сайта
const getHash = () => location.hash?.replace('#', '');

// Указание хеша в адресе сайта
function setHash(hash) {
  hash = hash ? `#${hash}` : location.href.split('#')[0];
  history.pushState('', '', hash);
}

// Функция для фиксированной шапки при скролле ===========================================================
function headerFixed() {
  const headerStickyObserver = new IntersectionObserver(([entry]) => {
    header.classList.toggle('sticky', !entry.isIntersecting);
  });

  if (firstScreen) {
    headerStickyObserver.observe(firstScreen);
  }
}

// Универсальная функция для открытия и закрытия попапов ==================================================
const togglePopupWindows = () => {
  document.addEventListener('click', ({ target }) => {
    if (
        target.classList.contains('_is-open') ||
        target.closest('.button-close')
    ) {
      const popup = target.closest('._is-open');

      popup.classList.remove('_is-open');
      toggleBodyLock(false);
    }

    if (target.closest('[data-type]')) {
      const popup = document.querySelector(
        `[data-popup="${target.dataset.type}"]`
      );

      if (document.querySelector('._is-open')) {
        document.querySelectorAll('._is-open').forEach((modal) => {
          modal.classList.remove('_is-open');
        });
      }

      popup.classList.add('_is-open');
      toggleBodyLock(true);
    }


  });
};

const addFav = () => {
  const goodFav = document.querySelectorAll('.good-fav');

  goodFav.forEach((item) => {
    item.addEventListener('click', () => item.classList.toggle('active'));
  });
}

const fixCatalog = () => {
  const catalogFixMenu = document.querySelector('.catalog-fix-menu');
  const header = document.querySelector('.header');
  const catalogPage = document.querySelector('.catalog-page');
  let lastScrollTop = 0; // Переменная для хранения предыдущей позиции скролла

  if (!catalogPage) return;

  const onScroll = () => {
    const offset = window.pageYOffset || document.documentElement.scrollTop;

    if (offset >= 120) {
      catalogFixMenu.classList.add('fixed');
      header.style.display = 'none';
    } else {
      catalogFixMenu.classList.remove('fixed');
      header.style.display = 'block';
    }

    // Проверяем направление скроллинга
    if (offset < lastScrollTop) {
      // Скроллим вверх
      catalogFixMenu.classList.add('showImg');
      header.style.display = 'block';
    } else {
      // Скроллим вниз
      catalogFixMenu.classList.remove('showImg');
    }

    // Обновляем предыдущую позицию скролла
    lastScrollTop = offset;
  };

  window.addEventListener('scroll', onScroll);
};

const fixArrow = () => {
  const startArrow = document.querySelector('.start-arrow');

  if (startArrow) {
    const toggleArrowVisibility = () => {
      if (window.scrollY < 300) {
        startArrow.style.display = 'none';
      } else {
        startArrow.style.display = 'flex';
      }
    };

    toggleArrowVisibility();

    window.addEventListener('scroll', toggleArrowVisibility);

    startArrow.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
};

const enterBtnHandler = () => {
  const enterBtn = document.querySelector('.enter-btn');

  enterBtn?.addEventListener('click', () => {
    const toggleLink = document.querySelectorAll('.registration-popup__toggle_link');
    const popupContent = document.querySelectorAll('.auth-popup .popup-content');

    toggleLink.forEach((item) => {
      item.classList.remove('show');
    });

    popupContent.forEach((item) => {
      item.classList.remove('active');
    });

    if (toggleLink.length > 0) {
      toggleLink[0].classList.add('show');
    }

    if (popupContent.length > 0) {
      popupContent[0].classList.add('active');
    }
  })
}

const showPassSwitcher = () => {
  const passWrapper = document.querySelectorAll('.form-control__pass-wrapper');
  passWrapper.forEach((item) => {
    const input = item.querySelector('input');
    const showEye = item.querySelector('.show-eye');
    showEye.addEventListener('click', () => {
      input.type === 'password' ? input.type = 'text' : input.type = 'password';
      item.classList.toggle('active');
    });

  })
}

const cartSwitcher = () => {
  const cartTotalPromo = document.querySelectorAll('.cart-total__promo');

  cartTotalPromo.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();

      if (e.target.closest('button')) {
        item.classList.add('submited');
      } else if (e.target.closest('.cart-total__promo-change')) {
        item.classList.remove('submited');
      }


    });
  })
}

const orderExpressSwitch = () => {
  const orderDeliveryExpress = document.querySelector('.order-delivery__express');

  orderDeliveryExpress?.addEventListener('click', () => orderDeliveryExpress.classList.toggle('active'));
}

const chooseSpot = () => {
  const items = document.querySelectorAll('.choose-spot__item');

  items.forEach(item => {
    item.addEventListener('click', () => {

      // items.forEach(i => i.classList.remove('active'));

      item.classList.toggle('active');
    });
  });
}

const fileImg = () => {
  const fileInput = document.getElementById('fileInput');
  const imagePreview = document.getElementById('imagePreview');
  const span = document.querySelector('.input-file__placeholder');

  fileInput?.addEventListener('change', function() {
    const files = this.files;

    if (files) {
      span.style.opacity = '0';
      Array.from(files).forEach(file => {
        const reader = new FileReader();

        reader.onload = function(event) {
          const img = document.createElement('img');
          img.src = event.target.result;
          imagePreview.appendChild(img);
        }

        reader.readAsDataURL(file);
      });
    }
  });
}

const cookies = () => {
  const cookie = document.querySelector('.cookie');

  if (!cookie) {
    return;
  }

  if (sessionStorage.cookie === 'none') {
    cookie.style.display = 'none';
    cookie.style.opacity = '0';
  } else {
    cookie.style.display = 'flex';
    cookie.style.opacity = '1';
  }

  cookie.addEventListener('click', (e) => {
    console.log(e.target)
    if (e.target.closest('.accept-cookie')) {
      cookie.style.display = 'none';
      sessionStorage.cookie = cookie.style.display;
    }
  });
};

const fixMenu = () => {
  const headerCatalog = document.querySelector('.header-catalog');
  const bw = document.body.clientWidth;

  headerCatalog?.addEventListener('click', () => {
    const body = document.querySelector('body');
    if (bw < 700) {
      body.classList.toggle('lock');
    }
  });
}

const catalogMenuScroll = () => {
  const scrollable = document.querySelector('.catalog-fix-menu__goods-container');
  const links = scrollable?.querySelectorAll('a');

  let isDown = false;
  let startX;
  let scrollLeft;
  let isDragging = false;

  scrollable?.addEventListener('mousedown', (e) => {
    isDown = true;
    isDragging = false;
    scrollable.classList.add('active');
    startX = e.pageX - scrollable.offsetLeft;
    scrollLeft = scrollable.scrollLeft;
  });

  scrollable?.addEventListener('mouseleave', () => {
    if (isDown) {
      isDown = false;
      scrollable.classList.remove('active');
      links.forEach(link => link.style.pointerEvents = '');
    }
  });

  scrollable?.addEventListener('mouseup', (e) => {
    isDown = false;
    scrollable.classList.remove('active');
    links.forEach(link => link.style.pointerEvents = '');

    if (isDragging) {
      e.preventDefault();
    }

    isDragging = false;
  });

  scrollable?.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    isDragging = true;

    links.forEach(link => link.style.pointerEvents = 'none');

    const x = e.pageX - scrollable.offsetLeft;
    const walk = (x - startX) * 2; // Скорость скроллинга
    scrollable.scrollLeft = scrollLeft - walk;
  });

  scrollable?.addEventListener('click', (e) => {
    if (isDragging) {
      e.preventDefault();
    }
    isDragging = false;
  });
}

const cartAddDetail = () => {
  const cardDetailBtn = document.querySelector('.card-detail .card-detail__btn');

  cardDetailBtn?.addEventListener('click', () => {
    cardDetailBtn.textContent = 'Добавить еще'
  })
}


const clearInput = () => {
  const registrationPopup = document.querySelector('.registration-popup');
  const inputs = registrationPopup?.querySelectorAll('form input');

  registrationPopup?.addEventListener('click', (e) => {
    if (e.target.closest('.close-popup') || e.target.matches('.popup')) {
      inputs.forEach((item) => {
        item.value = '';
      })
    }
  })
}

export {
  isWebp,
  isMobile,
  addTouchClass,
  headerFixed,
  togglePopupWindows,
  addLoadedClass,
  getHash,
  setHash,
  addFav,
  fixCatalog,
  fixArrow,
  enterBtnHandler,
  showPassSwitcher,
  cartSwitcher,
  orderExpressSwitch,
  chooseSpot,
  fileImg,
  cookies,
  fixMenu,
  catalogMenuScroll,
  cartAddDetail,
  clearInput
};
