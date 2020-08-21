$(document).ready(function () {
  // navigation active link
  $('.list__link').click(function () {
    $('.list__link').removeClass('list__link_active');
    $(this).toggleClass('list__link_active');
  });

  //

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

  // 

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

  var owl = $('.owl-carousel');
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




