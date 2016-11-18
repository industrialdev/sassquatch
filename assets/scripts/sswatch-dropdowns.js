(function($){
  /* Mobile toggle control */
  $('.mobile-toggle').click(function(event){
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

  /* Dropdown toggle control */
  $('.drawer-toggle').click(function(event){
    event.preventDefault();
    $(this).next('.drawer').toggleClass('open');
    if($('.drawer').hasClass("open")){
      $('.drawer-toggle').attr('aria-expanded', 'true');
      $('.drawer').slideDown('fast').attr('aria-hidden', 'false');
    }else{
      $('.drawer').slideUp('fast').attr('aria-hidden', 'true');
      $('.drawer-toggle').attr('aria-expanded', 'false');
    }
  });
})(jQuery);