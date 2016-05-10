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

  /* Generic dropdown toggle control */
  $('.drawer-toggle').click(function(event){
    event.preventDefault();
    
    if($(window).width() < 769){
      $(this).next('.drawer').toggleClass('open');

      if($('.drawer').hasClass("open")){
        $('.drawer-toggle').attr('aria-expanded', 'true');
        $('.drawer').slideDown('fast').attr('aria-hidden', 'false');
      }else{
        $('.drawer').slideUp('fast').attr('aria-hidden', 'true');
        $('.drawer-toggle').attr('aria-expanded', 'false');
      }
    }
  });

})(jQuery);