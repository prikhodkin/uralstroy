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
var inputs = document.querySelectorAll('.input-f');
Array.prototype.forEach.call(inputs, function (input) {
  var label = input.nextElementSibling,
      labelVal = label.querySelector('.input__text').innerText;
  input.addEventListener('change', function (e) {
    var countFiles = '';
    if (this.files && this.files.length >= 1) countFiles = this.files.length;
    if (countFiles) label.querySelector('.input__text').innerText = 'Выбрано файлов: ' + countFiles;else label.querySelector('.input__text').innerText = labelVal;
  });
});
$(".product__slider").slick({
  accessibility: false,
  dots: false,
  prevArrow: '.product__arrow--prev',
  nextArrow: '.product__arrow--next'
});
$('.product__step--min').on('click', function (evt) {
  evt.preventDefault();
  var currentValue = $('.product__number').val();
  $('.product__number').val(currentValue - 1);
});
$('.product__step--max').on('click', function (evt) {
  evt.preventDefault();
  var currentValue = Number($('.product__number').val());
  $('.product__number').val(currentValue + 1);
});
$('.product__show').on('click', function () {
  $('.product__info--hide').slideToggle();
});
$('.about__header--mobile').on('click', function () {
  $('.about__header--mobile').toggleClass('about__header--active');
  $('.about__menu-wrapper').slideToggle();
});
$('.about__header--company').on('click', function () {
  $('.about__header--company').toggleClass('about__header--active');
  $('.about__menu--company').slideToggle();
});
$('.about__header--clients').on('click', function () {
  $('.about__header--clients').toggleClass('about__header--active');
  $('.about__menu--clients').slideToggle();
});
$('.about__slider').slick({
  dots: false,
  accessibility: false,
  prevArrow: '.about__slider-arrow--prev',
  nextArrow: '.about__slider-arrow--next'
});
$('.about__slider-length').html('0' + $(".about__slider").slick("getSlick").slideCount);
$(".about__slider").on("afterChange", function (event, slick, currentSlide, nextSlide) {
  $(".about__slider-current").html('0' + (currentSlide + 1));
});
//# sourceMappingURL=maps/general.js.map
