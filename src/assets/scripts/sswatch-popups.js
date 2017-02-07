(function($){
  var prevLocation;

  $('*[popup]').click(function(){
    prevLocation = $(this);
    var target = '#' + $(this).attr('popup');
    $('body').addClass('popup-open');
    $('body').append('<div class="popup_overlay"></div>');
    $(target).fadeIn('fast');
    $('.popup_overlay').fadeIn('fast');
    $(target).find('.popup_close').focus();
  });

  $(document).on('click', '.popup_close, .popup_overlay', function(){
    $('body').removeClass('popup-open');
    $('.popup_overlay').remove();
    $('.popup').hide();
    prevLocation.focus();
  });

})(jQuery);