(function() {
	'use strict';

var DURATION = 150;

var ringElem = null;
var movingId = 0;
var prevFocused = null;
var keyDownTime = 0;

var win = window;
var doc = document;
var docElem = doc.documentElement;
var body = doc.body;


docElem.addEventListener('keydown', function(event) {
	var code = event.which;
	// Show animation only upon Tab or Arrow keys press.
	if (code === 9 || (code > 36 && code < 41)) {
		keyDownTime = Date.now();
	}
}, false);


docElem.addEventListener('focus', function(event) {
	var target = event.target;
	if (target.id === 'flying-focus') {
		return;
	}

	var isFirstFocus = false;
	if (!ringElem) {
		isFirstFocus = true;
		initialize();
	}

	var offset = offsetOf(target);
	ringElem.style.left = offset.left + 'px';
	ringElem.style.top = offset.top + 'px';
	ringElem.style.width = target.offsetWidth + 'px';
	ringElem.style.height = target.offsetHeight + 'px';

	if (isFirstFocus || !isJustPressed()) {
		return;
	}

	onEnd();
	target.classList.add('flying-focus_target');
	ringElem.classList.add('flying-focus_visible');
	prevFocused = target;
	movingId = setTimeout(onEnd, DURATION);
}, true);


docElem.addEventListener('blur', function() {
	onEnd();
}, true);


function initialize() {
	ringElem = doc.createElement('flying-focus'); // use uniq element name to decrease the chances of a conflict with website styles
	ringElem.id = 'flying-focus';
	ringElem.style.transitionDuration = ringElem.style.WebkitTransitionDuration = DURATION / 1000 + 's';
	body.appendChild(ringElem);
}


function onEnd() {
	if (!movingId) {
		return;
	}
	clearTimeout(movingId);
	movingId = 0;
	ringElem.classList.remove('flying-focus_visible');
	prevFocused.classList.remove('flying-focus_target');
	prevFocused = null;
}


function isJustPressed() {
	return Date.now() - keyDownTime < 42
}


function offsetOf(elem) {
	var rect = elem.getBoundingClientRect();
	var clientLeft = docElem.clientLeft || body.clientLeft;
	var clientTop  = docElem.clientTop  || body.clientTop;
	var scrollLeft = win.pageXOffset || docElem.scrollLeft || body.scrollLeft;
	var scrollTop  = win.pageYOffset || docElem.scrollTop  || body.scrollTop;
	var left = rect.left + scrollLeft - clientLeft;
	var top =  rect.top  + scrollTop  - clientTop;
	return {
		top: top || 0,
		left: left || 0
	};
}


	var style = doc.createElement('style');
	style.textContent = "#flying-focus {\
	position: absolute;\
	margin: 0;\
	background: transparent;\
	-webkit-transition-property: left, top, width, height;\
	transition-property: left, top, width, height;\
	-webkit-transition-timing-function: cubic-bezier(0,1,0,1);\
	transition-timing-function: cubic-bezier(0,1,0,1);\
	visibility: hidden;\
	pointer-events: none;\
	box-shadow: 0 0 2px 3px #78aeda, 0 0 2px #78aeda inset; border-radius: 2px;\
}\
#flying-focus.flying-focus_visible {\
	visibility: visible;\
	z-index: 9999;\
}\
.flying-focus_target {\
	outline: none !important; /* Doesn't work in Firefox :( */\
}\
/* http://stackoverflow.com/questions/71074/how-to-remove-firefoxs-dotted-outline-on-buttons-as-well-as-links/199319 */\
.flying-focus_target::-moz-focus-inner {\
	border: 0 !important;\
}\
/* Replace it with @supports rule when browsers catch up */\
@media screen and (-webkit-min-device-pixel-ratio: 0) {\
	#flying-focus {\
		box-shadow: none;\
		outline: 5px auto -webkit-focus-ring-color;\
		outline-offset: -3px;\
	}\
}\
";
	body.appendChild(style);
})();

/* Chrome fix for focusing jump link elements */
window.addEventListener("hashchange", function(event) {
  var element = document.getElementById(location.hash.substring(1));
  if (element) {
    if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
      element.tabIndex = -1;
    }
    element.focus();
  }
}, false);

(function($){

})(jQuery);

(function($){

  /* Auto formats select inputs */
  $("select").wrap("<div class='select-wrapper'></div>");
  $(".select-wrapper").append("<span class='fa fa-angle-down' aria-hidden='true'></span>");

  /* Mobile toggle control */
  $(".mobile-toggle").click(function(event){
    event.preventDefault();
    
    if($(window).width() < 769){
      $(this).next(".drawer").toggleClass("open");

      if($(".drawer").hasClass("open")){
        $(".drawer-toggle").attr("aria-expanded", "true");
        $(".drawer").slideDown("fast").attr("aria-hidden", "false");
      }else{
        $(".drawer").slideUp("fast").attr("aria-hidden", "true");
        $(".drawer-toggle").attr("aria-expanded", "false");
      }
    }
  });

  /* Dropdown/Accordion toggle control */
  // adds accessible icon to toggle button
  $(".btn_drawer-toggle").append("<span class='icon fa fa-angle-down' aria-hidden='true'></span>");

  $(".btn_drawer-toggle").click(function(event){
    event.preventDefault();
    $(this).next(".drawer").toggleClass('open');
    $(this).toggleClass("open");
    if($(this).next(".drawer").hasClass("open")){
      $(this).next(".drawer").slideDown("fast").attr("aria-expanded", "true");
      $(".btn_drawer-toggle").attr("aria-expanded", "true");
    }else{
      $(this).next(".drawer").slideUp("fast").attr("aria-expanded", "false");
      $(".btn_drawer-toggle").attr("aria-expanded", "false");
    }
  });
  
})(jQuery);
(function($){
  var selectedGrid = $("#select-grid").val();
  showGrid(selectedGrid);

  $("#select-grid").change(function(){
    selectedGrid = $("#select-grid").val();
    showGrid(selectedGrid);
  });

})(jQuery);

function showGrid(selectedGrid){
  $("#grid-default, #grid-mobile, #grid-tablet, #grid-desktop, #grid-wide-desktop").hide();
  $("#grid-" + selectedGrid).show();
}
(function($){
  generatePalette();
  $(".palette_info-default, .palette_info-light, .palette_info-dark").click(function(){
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(this).text()).select();
    document.execCommand("copy");
    $temp.remove();
  });
})(jQuery);

function generatePalette(){
  var colorCount = 6;
  $(".palettes").append("<div class='row'></div>");
  for(var i = 0; i <= (colorCount - 1); i++){
    $(".palettes .row").append("<div class='col_md-4'><div class='palette palette_" + (i + 1) + "'><div class='palette_light'></div><div class='palette_dark'></div></div><div class='palette_" + (i + 1) + "-info'><div class='palette_info-light'><span class='copy fa fa-files-o' aria-hidden='true'></span></div><div class='palette_info-default'><span class='copy fa fa-files-o' aria-hidden='true'></span></div><div class='palette_info-dark'><span class='copy fa fa-files-o' aria-hidden='true'></span></div></div></div>");
  }

  $(".palette").each(function(){
    var defaultColor = $(this).css('backgroundColor');
    var lightColor = $(this).find('.palette_light').css('backgroundColor');
    var darkColor = $(this).find('.palette_dark').css('backgroundColor');
    $(this).next('div').find('.palette_info-default').prepend(rgb2hex(defaultColor));
    $(this).next('div').find('.palette_info-light').prepend(rgb2hex(lightColor));
    $(this).next('div').find('.palette_info-dark').prepend(rgb2hex(darkColor));
  });
}

function rgb2hex(rgb) {
  rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  function hex(x) {
      return ("0" + parseInt(x).toString(16)).slice(-2);
  }
  return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}