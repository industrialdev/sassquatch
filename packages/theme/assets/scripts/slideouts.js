$(document).on('click', '.slideout__toggle', function(){
  var target = $('#' + $(this).attr('aria-controls'));
  var slideout = $(this).closest('.slideout');
  var overlayed = false;
  $(this).toggleClass('open');
  slideout.removeClass('open');
  slideout.removeClass('open--wide');
  slideout.find('.slideout__toggle').not(this).removeClass('open');
  slideout.find('.slideout__content').not(target).each(function(){
    if($(this).hasClass('open')){
      $(this).hide().removeClass('open');
    }
  });
  if(target.hasClass('slideout__content--overlay')){
    overlayed = true;
  }
  if($(this).hasClass('open')){
    setTimeout(function(){
      target.fadeIn().addClass('open');
    }, 400);
    slideout.addClass('open');
    slideout.closest('.slideout__container').css('padding-right', '460px');
    if(overlayed){
      slideout.addClass('open--wide');
      slideout.closest('.slideout__container').css('padding-right', '60px');
    }
  }else{
    target.hide().removeClass('open');
    slideout.removeClass('open');
    slideout.removeClass('open--wide');
    slideout.closest('.slideout__container').css('padding-right', '60px');
  }
});