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
    $('.popup.popup__temporary').remove();
    prevLocation.focus();
  });

  $(document).keyup(function(e) {
    if (e.key === "Escape") {
      if($('.popup.open').length){
        var target = $('.popup[style="display: block;"]');
        $('.popup__overlay').remove();
        $('.popup').hide();
        $('.popup.popup__temporary').remove();
        $('.popup.open').removeClass('open');
        prevLocation.focus();
      }
    }
  });

})(jQuery);

// show a simple popup similar to an alert
window.showPopup = function(message, title){
  prevLocation = $(document.activeElement);
  $('body').addClass('popup--open');
  $('body').append('<div class="popup__overlay"></div>');
  var newPopup = $('<div class="popup"></div>');
  newPopup.append($("<button class='popup__close'>").append(
  $('<i class="far fa-times" aria-hidden="true"></i><span class="webaim-hidden">Close popup</span>')
  ));
  newPopup.append($("<h3>").text(title));
  newPopup.append($("<p>").text(message));

  // add temporary so that the popup gets removed when it closes
  newPopup.addClass('popup__temporary open');

  $('body').append(newPopup);
  newPopup.fadeIn('fast');
  $('.popup__overlay').fadeIn('fast');
  newPopup.find('.popup__close').focus();
};