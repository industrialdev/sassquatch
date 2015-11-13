/*------------------------------------------------------------------------------
  Fix skiplink in chrome and other webkit borwsers
  Source: http://www.nczonline.net/blog/2013/01/15/fixing-skip-to-content-links/
------------------------------------------------------------------------------*/

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
  window.sr = new scrollReveal();
  $('.mobile-toggle').click(function(){
    var mobileMenu = $(this).next('ul');
    
    mobileMenu.toggleClass('open');

    if(mobileMenu.hasClass("open")){
      mobileMenu.slideDown('fast');
    }else{
      mobileMenu.slideUp('fast');
    }
  });
})(jQuery);