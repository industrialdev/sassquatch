var prevLocation = null;
var scrollDistance = 0;

function handleOpeningPopup(prev){
  prevLocation = prev;

  // Get the scroll distance at the time the modal was opened
  scrollDistance = $(window).scrollTop();

  // Pull the top of the body up by that amount
  $('body').css("top", scrollDistance * -1);

  $('body').addClass('popup--open');
  $('body').append('<div class="popup__overlay"></div>');
  $('.popup__overlay').fadeIn('fast');
}
function handleClosingPopup(){

  // Remove the negative top value on the body
  $('body').css("top", "");

  // Set the window's scroll position back to what it was before the modal was opened
  $(window).scrollTop(scrollDistance);

  $('body').removeClass('popup--open');
  $('.popup__overlay').remove();
  $('.popup').hide();
  $('.popup.popup__temporary').remove();
  $('.popup.open').removeClass('open');
  if (prevLocation){
    prevLocation.focus();
    prevLocation = null;
  }
}

// show a simple popup similar to an alert
window.showPopup = function(message, title){

  handleOpeningPopup($(document.activeElement));

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
  newPopup.find('.popup__close').focus();
};

// Manages opening of popup modals
$('*[data-popup]').click(function(){
  handleOpeningPopup($(this));
  var target = '#' + $(this).attr('data-popup');
  $(target).fadeIn('fast');
  $(target).find('.popup__close').focus();

  // scroll any scrolling content to the top in case we are re-opening it
  $(target).find('.scrolling-content').scrollTop(0);
});

// Manages closing of popup modals
$(document).on('click', '.popup__close, .popup__overlay', function(){
  handleClosingPopup();
});

$(document).keyup(function(e) {
  if (e.key === "Escape") {
    if($('.popup.open').length){
      handleClosingPopup();
    }
  }
});
