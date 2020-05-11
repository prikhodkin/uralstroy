$('.header__loupe').on('click', ()=> {
  $('.header__search-row').slideToggle();
})

$('.header__search-close--button').on('click', ()=> {
  $('.header__search-row').slideUp();
})

$('.header__search-circle').on('click', ()=> {
  $('.header__search-row input').val("");
})
