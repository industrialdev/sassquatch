(function($){

  /* Auto formats select inputs */
  $("select").wrap("<div class='select-wrapper'></div>");
  $(".select-wrapper").append("<i class='fa fa-angle-down' aria-hidden='true'></i>");

  /* Dropdown/Accordion toggle control */
  // adds accessible icon to toggle button
  $(document).on("click", ".drawer-toggle", function(event){
    event.preventDefault();
    $(this).next(".drawer").toggleClass('open');
    $(this).toggleClass("open");
    if($(this).next(".drawer").hasClass("open")){
      $(this).next(".drawer").slideDown("fast").attr("aria-expanded", "true");
      $(this).attr("aria-expanded", "true");
    }else{
      $(this).next(".drawer").slideUp("fast").attr("aria-expanded", "false");
      $(this).attr("aria-expanded", "false");
    }
  });

  // Close dropdown when it loses focus
  $('body').focusin(function(e) {
    $('.drawer_wrapper, .has-submenu').each(function(){
      if(!$(e.target).is($(this).find('*'))){
        $(this).find('.drawer').slideUp('fast').removeClass('open').attr('aria-expanded', 'false');
        $(this).find('.drawer-toggle').attr('aria-expanded', 'false');
        $(this).find('.drawer-toggle').removeClass('open');
      }
    });
  });
  
})(jQuery);