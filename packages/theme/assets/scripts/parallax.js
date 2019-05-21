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