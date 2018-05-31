(function($){

  // Dismiss alerts
  $('.alert__close').click(function(e){
    $(this).closest('.alert').remove();
  });

})(jQuery);

