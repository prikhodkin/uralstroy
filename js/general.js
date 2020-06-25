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
$('#responsiveTabsDemo').responsiveTabs();
var map = document.querySelector('.contacts__map');

if (map) {
  var init = function init() {
    var myMap = new ymaps.Map("map", {
      center: [55.712910, 37.644477],
      zoom: 12
    }),
        // Создаем геообъект с типом геометрии "Точка".
    myGeoObject = new ymaps.GeoObject({
      // Описание геометрии.
      geometry: {
        type: "Point",
        coordinates: [55.712710, 37.644477]
      },
      // Свойства.
      properties: {
        // Контент метки.
        iconContent: 'Метка',
        balloonContent: 'Меня можно перемещать'
      }
    }, {
      // Опции.
      // Иконка метки будет растягиваться под размер ее содержимого.
      preset: 'twirl#redStretchyIcon',
      // Метку можно перемещать.
      draggable: false
    }),
        myPlacemark2 = new ymaps.Placemark([55.712710, 37.644477], {
      // Свойства.
      hintContent: 'УралСтрой-ЖБИ'
    }, {
      // Опции.
      // Своё изображение иконки метки.
      iconImageHref: '/img/pin.png',
      // Размеры метки.
      iconImageSize: [84, 84],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-3, -42]
    }); // Добавляем все метки на карту.

    myMap.geoObjects.add(myPlacemark2);
  };

  ymaps.ready(init);
}

$('.partners__list').slick({
  dots: false,
  infinite: false,
  arrows: false,
  autoplay: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      dots: false
    }
  }, {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  } // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
  ]
});
//# sourceMappingURL=maps/general.js.map
