$(document).ready(function () {







  $(".order-js").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });






  var formHeight = $(".log-in__col--form").height();
  var win = $(window).height();

  if (formHeight > win) {
    formHeight = win / 1;
    $('.log-in__col--form').css({
      'height': formHeight
    });
    $('.log-in__col form').css({
      'padding': '20px 10px 10px 0',
      'overflow-y': 'scroll'
    });
  }


});