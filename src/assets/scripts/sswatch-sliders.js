(function($){

  $(".slider__btn--prev").click(function(){
    if(window.matchMedia('(max-width: 767px)').matches) {
      $(".slider__slide--mobile.active").each(function(){
        if($(this).is(":first-child") == true){
          if($(this).closest(".slider__slide").is(":first-child") == true){
            $(this).closest(".slider__slide").removeClass("active");
            $(".slider__slide:last-child").addClass("active").find(".slider__slide--mobile:last-child").addClass("active");
          }else{
            $(this).closest(".slider__slide").removeClass("active").prev(".slider__slide").addClass("active").find(".slider__slide--mobile:last-child").addClass("active");
          }
        } else {
          $(this).prev(".slider__slide--mobile").addClass("active");
        }
        $(this).removeClass("active");
      });
    } else {
      $(".slider__slide.active").each(function(){
        $(this).find(".slider__slide--mobile.active").removeClass('active');
        if($(this).is(":first-child") == true){
          $(".slider__slide:last-child").addClass("active").find(".slider__slide--mobile:first-child").addClass("active");
        }else{
          $(this).prev(".slider__slide").addClass("active").find(".slider__slide--mobile:first-child").addClass("active");
        }
        $(this).removeClass("active");
      });
    }
  });

  $(".slider__btn--next").click(function(){
    if(window.matchMedia('(max-width: 767px)').matches) {
      $(".slider__slide--mobile.active").each(function(){
        if($(this).is(":last-child") == true){
          if($(this).closest(".slider__slide").is(":last-child") == true){
            $(this).closest(".slider__slide").removeClass("active");
            $(".slider__slide:first-child").addClass("active").find(".slider__slide--mobile:first-child").addClass("active");
          }else{
            $(this).closest(".slider__slide").removeClass("active").next(".slider__slide").addClass("active").find(".slider__slide--mobile:first-child").addClass("active");
          }
        } else {
          $(this).next(".slider__slide--mobile").addClass("active");
        }
        $(this).removeClass("active");
      });
    } else {
      $(".slider__slide.active").each(function(){
        $(this).find(".slider__slide--mobile.active").removeClass('active');
        if($(this).is(":last-child") == true){
          $(".slider__slide:first-child").addClass("active").find(".slider__slide--mobile:first-child").addClass("active");
        }else{
          $(this).next(".slider__slide").addClass("active").find(".slider__slide--mobile:first-child").addClass("active");
        }
        $(this).removeClass("active");
      });
    }
  });

})(jQuery);