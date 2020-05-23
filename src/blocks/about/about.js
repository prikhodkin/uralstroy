$('.about__header--mobile').on('click', () => {
  $('.about__header--mobile').toggleClass('about__header--active');
  $('.about__menu-wrapper').slideToggle();
});

$('.about__header--company').on('click', () => {
  $('.about__header--company').toggleClass('about__header--active');
  $('.about__menu--company').slideToggle();
});

$('.about__header--clients').on('click', () => {
  $('.about__header--clients').toggleClass('about__header--active');
  $('.about__menu--clients').slideToggle();
});

$('.about__slider').slick({
  dots: false,
  accessibility: false,
  prevArrow: '.about__slider-arrow--prev',
  nextArrow: '.about__slider-arrow--next'
})


$('.about__slider-length').html('0' + ($(".about__slider").slick("getSlick").slideCount));
$(".about__slider").on("afterChange", function(event, slick, currentSlide, nextSlide){
  $(".about__slider-current").html('0' + (currentSlide + 1));
});
