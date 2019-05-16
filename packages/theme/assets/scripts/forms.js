$('select').each(function(){
  if(!$(this).closest('.form__select-wrapper').length){
    $(this).wrap('<div class="form__select-wrapper"></div>');
    $(this).closest('.form__select-wrapper').append('<i class="far fa-angle-down" aria-hidden="true"></i>')
  }
});