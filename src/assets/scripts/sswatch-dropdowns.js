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