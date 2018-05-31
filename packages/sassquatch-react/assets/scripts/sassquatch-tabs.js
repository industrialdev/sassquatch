(function($){
  $('.tabs__tab-control').click(function(e){
    e.preventDefault();
    var target = $(this).attr('href');
    $('.tabs__tab-control').removeClass('active').attr('aria-selected', 'false');
    $(this).addClass('active').attr('aria-selected', 'true');
    $('.tabs__content').removeClass('active');
    $(target).addClass('active');
  });
})(jQuery);