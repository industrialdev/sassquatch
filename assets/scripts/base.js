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

  /* Boilerplate theme scripts */
  $(document).scroll(function(){
    if ($(document).scrollTop() >= 265) {
      $('.nav_main').addClass('fixed-top');
    } else {
      $('.nav_main').removeClass('fixed-top');
    }
  });

  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top - 130
          }, 1000);
          return false;
        }
      }
    });
  });

})(jQuery);
