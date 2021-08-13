$(document).ready(function () {

  $('.hamburger').on('click', function () {
    $('.mobile-menu').toggleClass('--open');
    $('.wrapper').toggleClass('--open');
    $(this).toggleClass('--open');
  });

});