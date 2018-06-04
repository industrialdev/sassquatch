(function($){
  $('.tabs__tab-control').click(function(e){
    e.preventDefault();
    var target = $(this).attr('href');
    $(this).closest('.tabs').find('> .tabs__list > .tabs__tab-control').removeClass('active').attr('aria-selected', 'false');
    $(this).addClass('active').attr('aria-selected', 'true');
    $(this).closest('.tabs').find('> .tabs__content-container > .tabs__content').removeClass('active');
    $(target).addClass('active');
  });
})(jQuery);