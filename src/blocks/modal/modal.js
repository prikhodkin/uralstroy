const showModal = function (target, modal) {
  const close = $(modal).find('.modal__close');

  $(target).on('click', ()=> {
    $('.overlay').fadeIn();
    $(modal).fadeIn();
  });

  $(close).on('click', () => {
    $(modal).fadeOut();
    $('.overlay').fadeOut();
  })
};

showModal('.header__button', '.modal--callback');
showModal('.header__callback', '.modal--callback');
showModal('.promo__button', '.modal--callback');
showModal('.footer__callback', '.modal--callback');
showModal('.about__link', '.modal--callback');
showModal('.products__button', '.modal--order');
showModal('.product__send', '.modal--order');
showModal('.product__button', '.modal--order');
showModal('.jobs__button', '.modal--question');
showModal('.product__question', '.modal--question');
