$(document).ready(function () {

  (function ($) {
    $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

    $('.tab ul.tabs li a').click(function (g) {
      var tab = $(this).closest('.tab'),
        index = $(this).closest('li').index();

      tab.find('ul.tabs > li').removeClass('current');
      $(this).closest('li').addClass('current');

      tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
      tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();

      g.preventDefault();
    });
  })(jQuery);



  $('.calculator .tabs li').addClass('disabled-tab');
  $(function () {
    $('.route-tab .input input').on('keyup', function () {
      if ($('#from').val() != '' && $('#where').val() != '') {
        $(this).parent().parent().find('.btn').removeClass('btn-step');
        $('.about-cargo-tab-btn').parent().removeClass('disabled-tab');
      } else {
        $(this).parent().parent().find('.btn').addClass('btn-step');
        $('.about-cargo-tab-btn, .rate-tab-btn, .contacts-tab-btn').parent().addClass('disabled-tab');
      }
    });
  });

  $(function () {
    $('.about-cargo-tab .input input').on('keyup', function () {
      if ($('#quantity').val() != '' && $('#weight').val() != '' && $('#length').val() != '' && $('#width').val() != '' && $('#height').val() != '') {
        $(this).parent().parent().find('.btn').removeClass('btn-step');
        $('.rate-tab-btn').parent().removeClass('disabled-tab');
      } else {
        $(this).parent().parent().find('.btn').addClass('btn-step');
        $('.rate-tab-btn, .contacts-tab-btn').parent().addClass('disabled-tab');
      }
    });
  });

  $(function () {
    $('.contacts-tab .input input').on('keyup', function () {
      if ($('#name').val() != '' && $('#phone').val() != '' || $('#name').val() != '' && $('#email').val() != '' || $('#name').val() != '' && $('#phone').val() != '' && $('#email').val() != '') {
        $(this).parent().parent().find('.btn').removeClass('btn-step');
        $('.rate-tab-btn').parent().removeClass('disabled-tab');
      } else {
        $(this).parent().parent().find('.btn').addClass('btn-step');
        $('.rate-tab-btn, .contacts-tab-btn').parent().addClass('disabled-tab');
      }
    });
  });

  $('.tab_content .btn').on('click', function (e) {
    e.preventDefault();
  });

  $(document).on("click", ".route-tab .btn", function () {
    $(".about-cargo-tab-btn").trigger("click");
    setTimeout(function () {
      $('#scheduleright, #shelfright, #schedule, #shelfleft, #scalesmiddle, #boxes, #scalesleft, #man, #woman').addClass('sdfdfsd');
    }, 1000);

  });
  $(document).on("click", ".about-cargo-tab .btn", function () {
    $(".rate-tab-btn").trigger("click");
  });
  $(document).on("click", ".rate-tab .btn", function () {
    $('.contacts-tab-btn').parent().removeClass('disabled-tab');
    $(".contacts-tab-btn").trigger("click");
  });

  $('.calculator__item-description').on('click', function () {
    $(this).toggleClass('description-fade');
  });



  $('.for-customer__trigger').on('click', function (e) {
    e.preventDefault();
    $('.for-customer__fade-block').slideToggle();
    setTimeout(function () {
      $('#man1-for-customers,#man1-for-customers,#man2-for-customers,#man3-for-customers,#man4-for-customers,#man5-for-customers,#man6-for-customers,#truck-for-customers').addClass('sdfdfsd');
    }, 1000);
  });


  $('.route-tab-btn').on('click', function () {
    $('.tab-img').slideUp();
    $('.calculator__tab-img1').slideDown();
  });
  $('.about-cargo-tab-btn').on('click', function () {
    $('.tab-img').slideUp();
    $('.calculator__tab-img2').slideDown();
  });
  $('.rate-tab-btn').on('click', function () {
    $('.tab-img').slideUp();
    $('.calculator__tab-img3').slideDown();
    setTimeout(function () {
      $('#boxes-tab3, #man3-tab3, #man2-tab3, #man1-tab3, #lift-tab3').addClass('sdfdfsd');
    }, 1000);
  });

  $('.contacts-tab-btn').on('click', function () {
    $('.tab-img').slideUp();
    $('.calculator__tab-img4').slideDown();
    setTimeout(function () {
      $('#wall, #chart, #mac-tab4, #search-tab4, #truck-tab4, #woman-tab4, #man-tab4').addClass('sdfdfsd');
    }, 1000);
  });

  
  
  setTimeout(function () {
    $('.calculator-plane.fly img').css('transform', 'scale(0)');
    $('.calculator-plane.fly img').css('opacity', '0');
  }, 7000);
  setTimeout(function () {
    $('.calculator-plane.fly img').css('transform', 'scale(1)');
    $('.calculator-plane.fly img').css('opacity', '1');
  }, 8500);
  setTimeout(function () {
    $('.calculator-plane.fly img').css('transform', 'scale(0)');
  }, 12000);





  function revealOnScroll() {
    var scrolled = $(window).scrollTop();



    $(".etaps").each(function () {
      var current = $('.etaps-plane'),
        w_height = $(window).outerHeight(),
        offsetTop = current.offset().top;

      if (scrolled + w_height - 50 > offsetTop) {
        current.addClass("plane-fly");
        $('.etaps__animation-step').addClass('distance-traveled');
        setTimeout(function () {
          $('.btn').css({
            'opacity': '1',
            'transform': 'scale(1)',
            'pointer-events': 'inherit'
          });
          $('.point--fade-out').css('position', 'absolute');
          $('.smoke1,.smoke2,.smoke3,.smoke4,.smoke5,.smoke6').remove();
          $('.etaps-plane img').css('display', 'none');
          $('.etaps-plane svg').css('display', 'block');
        }, 6000);
      }
    });


    $(".add-info--with-arrow").each(function () {
      w_height1 = $(window).outerHeight(),
        offsetTop1 = $('.add-info svg').offset().top;
      if (scrolled + w_height1 - 50 > offsetTop1) {
        $('.add-info svg').addClass("draw-arr");
      }
    });


    $(".calculator-plane").each(function () {
      w_height2 = $(window).outerHeight(),
        offsetTop2 = $('.calculator-plane').offset().top;
      if (scrolled + w_height2 - 50 > offsetTop2) {
        $('.calculator-plane').addClass("fly");
      }
    });

  }
  $(window).on("scroll", revealOnScroll);






});