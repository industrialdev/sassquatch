(function($){

  var prevLocation;

  // Manages opening of popup modals
  $('*[data-popup]').click(function(){
    prevLocation = $(this);
    var target = '#' + $(this).attr('data-popup');
    $('body').addClass('popup--open');
    $('body').append('<div class="popup__overlay"></div>');
    $(target).fadeIn('fast');
    $('.popup__overlay').fadeIn('fast');
    $(target).find('.popup__close').focus();
  });

  // Manages closing of popup modals
  $(document).on('click', '.popup__close, .popup__overlay', function(){
    $('body').removeClass('popup--open');
    $('.popup__overlay').remove();
    $('.popup').hide();
    prevLocation.focus();
  });

  $(document).keyup(function(e) {
    if (e.key === "Escape") {
      if($('.popup.open').length){
        var target = $('.popup[style="display: block;"]');
        $('.popup__overlay').remove();
        $('.popup').hide();
        $('.popup.open').removeClass('open');
        prevLocation.focus();
      }
    }
  });

})(jQuery);