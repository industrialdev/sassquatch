(function($){


function setCookie(cname, cvalue, exdays) {
  var cookieDate = new Date();
  cookieDate.setTime(cookieDate.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ cookieDate.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

/* Dropdown/Accordion toggle control */
// adds accessible icon to toggle button
$(document).on('click', ".dropdown__toggle", function(event){
  event.preventDefault();
  $(this).toggleClass("open");
  var targetContent = '#' + $(this).attr('aria-controls');
  if($(this).hasClass("open")){
    $(targetContent).slideDown('fast').attr("aria-expanded", "true");
    $(this).attr("aria-expanded", "true");
  }else{
    $(targetContent).slideUp('fast').attr("aria-expanded", "false");
    $(this).attr("aria-expanded", "false");
  }
  $(this).focus();
});

// Close dropdown when it loses focus
$('body').focusin(function(e) {
  setTimeout(function(){

    $('.dropdown').each(function(){
      if(!$(e.target).is($(this).find('*'))){
        $(this).find('.dropdown__toggle').attr('aria-hidden', 'true'); // Voiceover safari fix
        $(this).find('.dropdown__content').slideUp('fast').removeClass('open').attr('aria-expanded', 'false');
        $(this).find('.dropdown__toggle').attr('aria-expanded', 'false');
        $(this).find('.dropdown__toggle').removeClass('open');
        setTimeout(function(){
          $('.dropdown__toggle').attr('aria-hidden', 'false'); // Voiceover safari fix
        }, 400);
      }
    });

  }, 250);
});

$('select').each(function(){
  if(!$(this).closest('.form__select-wrapper').length){
    $(this).wrap('<div class="form__select-wrapper"></div>');
    $(this).closest('.form__select-wrapper').append('<i class="far fa-angle-down" aria-hidden="true"></i>')
  }
});
$(document).on('click', 'a[href^="#"]:not([href="#"])', function(e) {
  if (!$(this).hasClass('tabs__tab-control')){
    var id = $(this).attr('href');

    var $id = $(id);
    if ($id.length === 0) {
      return;
    }

    e.preventDefault();

    if ($(window).width() < 768){
      var pos = $id.offset().top;
    } else {
      var pos = $id.offset().top;
    }

    $('body, html').animate({
      scrollTop: pos
    }, 1000);

    setTimeout(function(){
      $id.focus();
      $id.click();
    }, 1100);
  }
});

// Attaches an icon that line breaks with the last word in the targeted element
// data-attach-icon takes font awesome icon class name as the value (excluding the fa prefix)
$('*[data-attach-icon-after], *[data-attach-icon-before]').each(function(index, element) {
  var text = $(element), word_array, last_word, first_word, first_part;
  var attr = $(this).attr('data-attach-icon-after');
  if(typeof attr !== typeof undefined && attr !== false){
    var icon = $(this).attr('data-attach-icon-after');
    word_array = text.html().split(/\s+/);
    last_word = word_array.pop();
    first_part = word_array.join(' ');
    text.html([first_part, ' <span class="text--no-break">', last_word, '<i class="' + icon + '" aria-hidden="true"></i></span>'].join(''));
  }else{
    var icon = $(this).attr('data-attach-icon-before');
    word_array = text.html().split(/\s+/);
    first_word = word_array.shift();
    first_part = word_array.join(' ');
    text.html([' <span class="text--no-break"><i class="' + icon + '" aria-hidden="true"></i>', first_word, '</span> ', first_part].join(''));
  }
});

$('.link--internal').each(function(index, element){
  var text = $(element), word_array, last_word, first_word, first_part;
  var icon = 'far fa-arrow-right';
  word_array = text.html().split(/\s+/);
  last_word = word_array.pop();
  first_part = word_array.join(' ');
  text.html([first_part, ' <span class="text--no-break">', last_word, '<i class="' + icon + '" aria-hidden="true"></i></span>'].join(''));
});

$('.link--external').each(function(index, element){
  var text = $(element), word_array, last_word, first_word, first_part;
  var icon = 'far fa-external-link-square';
  word_array = text.html().split(/\s+/);
  first_word = word_array.shift();
  first_part = word_array.join(' ');
  text.html([' <span class="text--no-break"><i class="' + icon + '" aria-hidden="true"></i>', first_word, '</span> ', first_part].join(''));
});

$('.link--file').each(function(index, element){
  var text = $(element), word_array, last_word, first_word, first_part;
  var extension = $(this).attr('href').substr(($(this).attr('href').lastIndexOf('.') +1));
  var icon;
  var iconColor = '#013A81';
  switch(extension){
    case 'pdf':
      icon = 'far fa-file-pdf';
      iconColor = '#ff0000';
      break;
    case 'docx':
      icon = 'far fa-file-alt';
      iconColor = '#00a4e4';
      break;
    case 'doc':
      icon = 'far fa-file-word';
      iconColor = '#00a4e4';
      break;
    case 'xls':
      icon = 'far fa-file-excel';
      iconColor = '#acc125';
      break;
    case 'xlsx':
      icon = 'far fa-file-excel';
      iconColor = '#acc125';
      break;
    case 'ppt':
      icon = 'far fa-file-powerpoint';
      iconColor = '#00a4e4';
      break;
    case 'pptx':
      icon = 'far fa-file-powerpoint';
      iconColor = '#fbb034';
      break;
    case 'pptm':
      icon = 'far fa-file-powerpoint';
      iconColor = '#fbb034';
      break;
    default:
      icon = 'far fa-file';
      iconColor = '#037CB7';
  }
  word_array = text.html().split(/\s+/);
  first_word = word_array.shift();
  first_part = word_array.join(' ');
  text.html([' <span class="link--file__text"><span class="no-break"><i class="' + icon + '" aria-hidden="true" style="color:' + iconColor + ';"></i> ', first_word, '</span> ', first_part + '</span>'].join(''));
});

$('table').each(function(){
  if(!$(this).closest('.table__wrapper').length){
    $(this).wrap('<div class="table__wrapper"></div>');
  }
});
//Creates the jumplink menu
if($(".nav--jumplinks").length){
  var jumplinkCount = 0;
  $(".jumplink__target").each(function(){
    jumplinkCount++;
    var linkId = 'jumplink--' + jumplinkCount;
    $(this).attr('id', linkId);
    var linkTar = $(this).attr("id");
    var linkText = $(this).text();
    $(".nav--jumplinks .nav__menu").append("<li><a href='#" + linkTar + "'><span>" + linkText + "</span></a></li>");
  });
}

// Sets parallax position on load
$('*[parallax]').each(function(){
  parallax($(this));
});

var parallaxScroll = function() {
  $('*[parallax]').each(function(){
    parallax($(this));
  });
};

var parallaxFrame = window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  window.oRequestAnimationFrame;

var lastScrollTop = $(window).scrollTop();

if (parallaxFrame){
  parallaxCheckScroll();
}

function parallaxCheckScroll() {
  var scrollTop = $(window).scrollTop();
  if (lastScrollTop === scrollTop) {
    parallaxFrame(parallaxCheckScroll);
    return;
  } else {
    lastScrollTop = scrollTop;
    parallaxScroll();
    parallaxFrame(parallaxCheckScroll);
  }
}

// Controls parallax positioning
function parallax(element){
  var distanceScrolled = $(document).scrollTop();
  if(element.closest('*[parallax-container]').length){
    distanceScrolled = distanceScrolled - element.closest('*[parallax-container]').offset().top + ($(window).height() / 4);
    if(distanceScrolled < 0){
      distanceScrolled = 0;
    }
  }
  var speedFactor = element.attr('parallax-speed');
  var position = distanceScrolled * speedFactor;
  var maxMovement = $(window).height();
  var minMovement = $(window).height() * -1;
  if(element[0].hasAttribute('parallax-max')){
    maxMovement = element.outerHeight() * element.attr('parallax-max');
    if(position > maxMovement){
      position = maxMovement;
    }
  }
  if(element[0].hasAttribute('parallax-min')){
    minMovement = (element.outerHeight() * element.attr('parallax-min')) * -1;
    if(position < minMovement){
      position = minMovement;
    }
  }
  element.css('transform', 'translate3d(0, ' + position + 'px, 0)');
}
var prevLocation = null;
var scrollDistance = 0;

/*
Why are we doing all this craziness with scrollDistance?
See the following SO answer for details: https://stackoverflow.com/a/54798936
 */
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

$('.tabs__tab-control').click(function(e){
  e.preventDefault();
  var target = '#' + $(this).attr('aria-controls');
  $(this).closest('.tabs').find('> .tabs__list > .tabs__tab-control').removeClass('active').attr('aria-selected', 'false');
  $(this).addClass('active').attr('aria-selected', 'true');
  $(this).closest('.tabs').find('> .tabs__content-container > .tabs__content').removeClass('active');
  $(target).addClass('active');
});


})(jQuery);