$(document).ready(function () {
  $('.logo path').addClass('fade-svg-elem');
  $('.logo svg').each(function () {
    $(this).children('path').each(function (idx, el) {
      $(el).css('transition-delay', (idx * 25) + 'ms');
    });
  });





    $('.calculator__tab-img1 path').addClass('fade-svg-elem');
    $('.logo svg').each(function () {
      $(this).children('path').each(function (idx, el) {
        $(el).css('transition-delay', (idx * 25) + 'ms');
      });
    });

});