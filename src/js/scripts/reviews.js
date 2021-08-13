$(document).ready(function () {
  var swiper = new Swiper(".reviews-js", {
    slidesPerView: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoHeight: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      992: {
        slidesPerView: 2,
        spaceBetween: 27,
        slidesPerGroup: 2,
      },
    }
  });
});