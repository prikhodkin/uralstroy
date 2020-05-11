"use strict";

$('.menu__btn').click(function () {
  $('.menu__hamburger').toggleClass('menu__hamburger--active');
});
$('.header__loupe').on('click', function () {
  $('.header__search-row').slideToggle();
});
$('.header__search-close--button').on('click', function () {
  $('.header__search-row').slideUp();
});
$('.header__search-circle').on('click', function () {
  $('.header__search-row input').val("");
});
//# sourceMappingURL=maps/general.js.map
