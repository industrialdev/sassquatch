(function($){
  var prevLocation;

  $('*[popup]').click(function(){
    prevLocation = $(this);
    var target = '#' + $(this).attr('popup');
    $('body').addClass('popup--open');
    $('body').append('<div class="popup__overlay"></div>');
    $(target).fadeIn('fast');
    $('.popup__overlay').fadeIn('fast');
    $(target).find('.popup__close').focus();
  });

  $(document).on('click', '.popup__close, .popup__overlay', function(){
    $('body').removeClass('popup--open');
    $('.popup__overlay').remove();
    $('.popup').hide();
    prevLocation.focus();
  });

})(jQuery);