/* Chrome fix for focusing jump link elements */
window.addEventListener('hashchange', function(event) {
  var element = document.getElementById(location.hash.substring(1));
  if (element) {
    if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
      element.tabIndex = -1;
    }
    element.focus();
  }
}, false);

(function($){

  $(document).on('click', 'a[href^="#"]', function(e) {
    if (!$(this).hasClass('tabs__tab-control')){
      var id = $(this).attr('href');

      var $id = $(id);
      if ($id.length === 0) {
        return;
      }

      $id.attr("tabindex", -1);

      e.preventDefault();

      if ($(window).width() < 768){
        var pos = $id.offset().top - 80;
      } else {
        var pos = $id.offset().top - 80;
      }

      $('body, html').animate({
        scrollTop: pos
      }, 1000);

      setTimeout(function(){
        $id.focus();
      }, 1100);
    }
  });

  // Attaches an icon that line breaks with the last word in the targeted element
  // data-attach-icon takes font awesome icon class name as the value (excluding the fa prefix)
  $('*[data-attach-icon-after], *[data-attach-icon-before]').each(function(index, element) {
    var text = $(element), word_array, last_word, first_word, first_part;
    var attr = $(this).attr('data-attach-icon-after');

    if(typeof attr !== typeof undefined && attr !== false){
      var icon = $(this).attr('data-attach-icon-after');
      word_array = text.html().split(/\s+/);
      last_word = word_array.pop();
      first_part = word_array.join(' ');
      text.html([first_part, ' <span class="no-break">', last_word, '<i class="fa fa-' + icon + '" aria-hidden="true"></i></span>'].join(''));
    }else{
      var icon = $(this).attr('data-attach-icon-before');
      word_array = text.html().split(/\s+/);
      first_word = word_array.shift();
      first_part = word_array.join(' ');
      text.html([' <span class="no-break"><i class="fa fa-' + icon + '" aria-hidden="true"></i>', first_word, '</span> ', first_part].join(''));
    }

  });

  // Wraps tables for mobile scrolling
  $('table').wrap('<div class="table-wrapper"></div>');

})(jQuery);