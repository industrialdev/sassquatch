(function($){

  /* Auto formats select inputs */
  $("select").each(function(){
    if(!$(this).hasClass("select--styled")){
      $(this).wrap('<div class="form__select-wrapper"></div>');
    }
  });
  $('.form__select-wrapper').append('<i class="fa fa-angle-down" aria-hidden="true"></i>');

  /* Dropdown/Accordion toggle control */
  // adds accessible icon to toggle button
  $(document).on("click", ".drawer-toggle", function(event){
    event.preventDefault();
    $(this).toggleClass("open");
    if($(this).closest(".drawer-controls").length){
      $(this).closest(".drawer-controls").next(".drawer").toggleClass("open");
      if($(this).closest(".drawer-controls").next(".drawer").hasClass("open")){
        $(this).closest(".drawer-controls").next(".drawer").slideDown("fast").attr("aria-expanded", "true");
        $(this).attr("aria-expanded", "true");
      }else{
        $(this).closest(".drawer-controls").next(".drawer").slideUp("fast").attr("aria-expanded", "false");
        $(this).attr("aria-expanded", "false");
      }
    }else{
      $(this).next(".drawer").toggleClass("open");
      if($(this).next(".drawer").hasClass("open")){
        $(this).next(".drawer").slideDown("fast").attr("aria-expanded", "true");
        $(this).attr("aria-expanded", "true");
      }else{
        $(this).next(".drawer").slideUp("fast").attr("aria-expanded", "false");
        $(this).attr("aria-expanded", "false");
      }
    }
  });

  // Safari fix for focusing clicked dropdown buttons
  $('.drawer-toggle').click(function(){
    $(this).focus();
  });

  // Close dropdown when it loses focus
  $('body').focusin(function(e) {
    $('.drawer-wrapper, .has-submenu').each(function(){
      if(!$(e.target).is($(this).find('*'))){
        $(this).find('.drawer-toggle').attr('aria-hidden', 'true'); // Voiceover safari fix
        $(this).find('.drawer').slideUp('fast').removeClass('open').attr('aria-expanded', 'false');
        $(this).find('.drawer-toggle').attr('aria-expanded', 'false');
        $(this).find('.drawer-toggle').removeClass('open');
        setTimeout(function(){ 
          $('.drawer-toggle').attr('aria-hidden', 'false'); // Voiceover safari fix
        }, 400);
      }
    });
  });
  
})(jQuery);