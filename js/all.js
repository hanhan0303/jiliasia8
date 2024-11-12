//--JS---header---otherpagesNav
const otherNavToggleBtn = document.querySelector('.otherNav-btn');
const otherNavMobile = document.querySelector('.otherNav-items');
otherNavToggleBtn.addEventListener('click', function () {
  otherNavToggleBtn.classList.toggle('active');
  otherNavMobile.classList.toggle('active');
});

//--hamburger------
const topbarToggleBtn = document.querySelector('.hamburger');
const topbarMobileNav = document.querySelector('.header-mobNav');
topbarToggleBtn.addEventListener('click', function () {
  topbarToggleBtn.classList.toggle('active');
  topbarMobileNav.classList.toggle('active');
});


//JQuery
$(document).ready(function () {
  //--slick----banner--
  $('.banner-web').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToScroll: 1,
    adaptiveHeight: true,
  });
  $('.banner-mob').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToScroll: 1,
    adaptiveHeight: true,
  });
  //--gamelist-title--
  $('.gamelist-title > button').click(function (e) {
    $(this).addClass('active').siblings().removeClass('active');
  });

  //--gamelist--
  const $gameListWrap = $('.gamelist-wrap');
  $('.gamelist-title > button').on('click', (e) => {
    const btn = e.currentTarget;
    const id = $(btn).data('id');
    const games = gameList[id] || [];
    const $gamesWrap = $(`
        <div class="swiper">
          <ul class="gamelist-items swiper-wrapper">
          ${games.map((game) => {
            return (`
              <li class="swiper-slide">
                        <div class="gamebox-top">
                          <div class="gamebox-img">
                            <img
                              src="${game.imageSrc}"
                              title="${game.imgTitle}"
                              alt="${game.imgAlt}"
                            />
                            <div class="btn-bg">
                            ${game.toggleLink
              ? ``
              : `<a href="${game.btnHref ? game.btnHref : ''
              }" rel="${game.btnRel ? game.btnRel : ''
              }" target="${game.btnTarget ? game.btnTarget : ''
              }">PLAY REAL</a>
                            `
            }
                            </div>
                          </div>
                          ${game.toggleLink ? `<div class="gamebox-toggleBtn">
                          <div class="dropDown-btn-wrap">
                            <div class="dropDown-btn-toggle">PLAY REAL</div>
                            <div class="dropDown-btn-links">
                              <a
                                class="dropDown-btn-link"
                                href="https://hawkplayoffical.com/3ZcJV"
                                rel="nofollow"
                                target="_blank"
                                >Link 1
                              </a>
                              <a
                                class="dropDown-btn-link"
                                href="https://hawkplayoffical.com/pZTp5"
                                rel="nofollow"
                                target="_blank"
                                >Link 2</a
                              >
                              <a
                                class="dropDown-btn-link"
                                href="https://hawkplayoffical.com/NPyLF"
                                rel="nofollow"
                                target="_blank"
                                >Link 3</a
                              >
                              <a
                                class="dropDown-btn-link"
                                href="https://hawkplayoffical.com/iyATd"
                                rel="nofollow"
                                target="_blank"
                                >Link 4</a
                              >
                            </div>
                          </div>
                        </div>`: ``}
                          <div class="gamebox-brand">${game.brand}</div>
                        </div>
                        <div class="gamebox-bottom">
                          <div class="gamebox-name">${game.name}</div>
                          <div class="gamebox-info">
                            <div class="play-count">
                              <span>${game.nums}</span>
                            </div>
                          </div>
                        </div>
                      </li>
          `)
          }).join('')}
          </ul>
        </div>
      `);
    $gameListWrap.html($gamesWrap);
    gameListSwiper();
    dropDownBtnToggle();
  });

  //--go-top-btn--
  function showBtnCondition() {
    if ($(this).scrollTop() > 300) {
      $('.go-top-btn').fadeIn();
    } else {
      $('.go-top-btn').fadeOut();
    }
  }
  $(window).scroll(showBtnCondition);
  $('.go-top-btn').click(function (event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: 0,
    });
  });
});

function gameListSwiper() {
//--JS---swiper----gamelist-web----
let gamelistWeb = new Swiper('.gamelist-web .swiper', {
  loop: false,
  speed: 300,
  slidesPerView: 3,
  slidesPerGroup: 3,
  lazy: {
    loadPrevNext: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
    1280: {
      slidesPerView: 5,
      slidesPerGroup: 5,
    },
  },
});

//--JS---swiper----gamelist-mob----
let gamelistMob = new Swiper('.gamelist-mob .swiper', {
  loop: false,
  speed: 300,
  slidesPerView: 2.5,
  lazy: {
    loadPrevNext: true,
  },
  grabCursor: true,
  freeMode: {
    enabled: true,
    minimumVelocity: 0.2,
    momentum: true,
    momentumBounce: true,
    momentumBounceRatio: 3,
    momentumRatio: 2,
    momentumVelocityRatio: 2,
    sticky: true,
  },
});

};


//--JS---swiper----gamelist-web----
//--JS---swiper----gamelist-mob----
gameListSwiper();

//--JS---swiper----winnerList----
let winnerList = new Swiper('.winnerList-wrapper .swiper', {
  direction: 'vertical',
  loop: true,
  speed: 2000,
  autoplay: {
    delay: 0,
    stopOnLastSide: true,
    disableOnInteraction: false,
    reverseDirection: true,
  },
  observer: true,
  observeParents: true,
  slidesPerView: 4,
  lazy: {
    loadPrevNext: true,
  },
  spaceBetween: 25,
});

//--JS---swiper----otherInfoNav----
let otherInfoNav = new Swiper('.otherInfoNav .swiper', {
  loop: false,
  speed: 300,
  initialSlide: 0,
  slidesPerView: 'auto',
  lazy: {
    loadPrevNext: true,
  },
  navigation: {
    nextEl: '.otherInfoNav-nextBtn',
    prevEl: '.otherInfoNav-prevBtn',
  },
});

//dropDown-btn-wrap
function dropDownBtnToggle() {
  let dropDownToggles = document.querySelectorAll('.dropDown-btn-wrap');
  dropDownToggles.forEach((item) => {
  item.addEventListener('click', (e) => {
    dropDownBtns.forEach(function (sibling) {
      if (sibling !== item) {
        sibling.classList.remove('show');
      }
    });
    item.classList.toggle('show');
  });
});
};
const dropDownBtns = document.querySelectorAll('.dropDown-btn-wrap');
dropDownBtns.forEach((item) => {
  item.addEventListener('click', (e) => {
    dropDownBtns.forEach(function (sibling) {
      if (sibling !== item) {
        sibling.classList.remove('show');
      }
    });
    item.classList.toggle('show');
  });
});
