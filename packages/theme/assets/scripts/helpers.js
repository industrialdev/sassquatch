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
        var pos = $id.offset().top;
      } else {
        var pos = $id.offset().top;
      }

      $('body, html').animate({
        scrollTop: pos
      }, 1000);

      setTimeout(function(){
        $id.focus();
        $id.click();
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
      text.html([first_part, ' <span class="text--no-break">', last_word, '<i class="' + icon + '" aria-hidden="true"></i></span>'].join(''));
    }else{
      var icon = $(this).attr('data-attach-icon-before');
      word_array = text.html().split(/\s+/);
      first_word = word_array.shift();
      first_part = word_array.join(' ');
      text.html([' <span class="text--no-break"><i class="' + icon + '" aria-hidden="true"></i>', first_word, '</span> ', first_part].join(''));
    }
  });

  $('.link--internal').each(function(index, element){
    var text = $(element), word_array, last_word, first_word, first_part;
    var icon = 'far fa-arrow-right';
    word_array = text.html().split(/\s+/);
    last_word = word_array.pop();
    first_part = word_array.join(' ');
    text.html([first_part, ' <span class="text--no-break">', last_word, '<i class="' + icon + '" aria-hidden="true"></i></span>'].join(''));
  });

  $('.link--external').each(function(index, element){
    var text = $(element), word_array, last_word, first_word, first_part;
    var icon = 'far fa-external-link-square';
    word_array = text.html().split(/\s+/);
    first_word = word_array.shift();
    first_part = word_array.join(' ');
    text.html([' <span class="text--no-break"><i class="' + icon + '" aria-hidden="true"></i>', first_word, '</span> ', first_part].join(''));
  });
  
  $('.link--file').each(function(index, element){
    var text = $(element), word_array, last_word, first_word, first_part;
    var extension = $(this).attr('href').substr(($(this).attr('href').lastIndexOf('.') +1));
    var icon;
    var iconColor = '#013A81';
    switch(extension){
      case 'pdf':
        icon = 'far fa-file-pdf';
        iconColor = '#ff0000';
        break;
      case 'docx':
        icon = 'far fa-file-alt';
        iconColor = '#00a4e4';
        break;
      case 'doc':
        icon = 'far fa-file-word';
        iconColor = '#00a4e4';
        break;
      case 'xls':
        icon = 'far fa-file-excel';
        iconColor = '#acc125';
        break;
      case 'xlsx':
        icon = 'far fa-file-excel';
        iconColor = '#acc125';
        break;
      case 'ppt':
        icon = 'far fa-file-powerpoint';
        iconColor = '#00a4e4';
        break;
      case 'pptx':
        icon = 'far fa-file-powerpoint';
        iconColor = '#fbb034';
        break;
      case 'pptm':
        icon = 'far fa-file-powerpoint';
        iconColor = '#fbb034';
        break;
      default:
        icon = 'far fa-file';
        iconColor = '#037CB7';
    }
    word_array = text.html().split(/\s+/);
    first_word = word_array.shift();
    first_part = word_array.join(' ');
    text.html([' <span class="link--file__text"><span class="no-break"><i class="' + icon + '" aria-hidden="true" style="color:' + iconColor + ';"></i> ', first_word, '</span> ', first_part + '</span>'].join(''));
  });

  $('table').each(function(){
    if(!$(this).closest('.table__wrapper').length){
      $(this).wrap('<div class="table__wrapper"></div>');
    }
  });

})(jQuery);