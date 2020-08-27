$(document).ready(function () {
  // navigation active link
  const listLink = $('.list__link');
  listLink.click(function () {
    listLink.removeClass('list__link_active');
    $(this).toggleClass('list__link_active');
  });

  // main-carousel

  $('#main-carousel').owlCarousel({
    items: 3,
    loop: true,
    margin: 15,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });

  // inst-carousel

  $('#inst-carousel').owlCarousel({
    items: 5,
    dots: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      },
      1200: {
        items: 5
      }
    }
  });

  //Отлавливаем события на стрелках котроля слайдами

  const owl = $('.owl-carousel');
  owl.owlCarousel();
  // Go to the previous item
  $('.carousel__control_prev').click(function () {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
  })
  // Go to the next item
  $('.carousel__control_next').click(function () {
    owl.trigger('next.owl.carousel');
  })
});

// header_sticky

$(window).scroll((event) => scrollPage());

const header = $('#myHeader');
const sticky = header.offset();

const carousel = $('#main-carousel');

const scrollPage = () => {
  // console.log('scrollTop: ' + $(window).scrollTop() + ' > ' + 'Sticky-top: ' + sticky.top );
  if ($(window).scrollTop() > sticky.top) {
    header.addClass('header_sticky');
    carousel.addClass('block-carousel_margin-top');
  } else {
    header.removeClass('header_sticky');
    carousel.removeClass('block-carousel_margin-top');
  }
}

// header__burger toggle state

const headerBurger = $('#headerBurger');
const navList = $('#navList');
const myLogo = $('#myLogo');
const body = $('body');

headerBurger.click(function () {
  headerBurger.toggleClass('header__burger_active');
  navList.toggleClass('list_active');
  myLogo.toggleClass('logo-wrap_active');
  body.toggleClass('lock');
})






