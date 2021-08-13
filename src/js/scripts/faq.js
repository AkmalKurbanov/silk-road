$(document).ready(function () {
  $('.faq__title').on('click', function () {
    $(this).next().slideToggle();
    $(this).parent().toggleClass('active');
    $('.faq__title').not(this).next().slideUp();
    $('.faq__title').not(this).parent().removeClass('active');
  });
});