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
//# sourceMappingURL=maps/general.js.map
