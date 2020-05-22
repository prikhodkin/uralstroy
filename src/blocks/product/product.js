$(".product__slider").slick({
  accessibility: false,
  dots: false,
  prevArrow: '.product__arrow--prev',
  nextArrow: '.product__arrow--next'
});

$('.product__step--min').on('click', (evt) => {
  evt.preventDefault();
  const currentValue = $('.product__number').val();
  $('.product__number').val(currentValue - 1);
})

$('.product__step--max').on('click', (evt) => {
  evt.preventDefault();
  const currentValue = Number($('.product__number').val());
  $('.product__number').val(currentValue + 1);
})

$('.product__show').on('click', () => {
  $('.product__info--hide').slideToggle();
})
