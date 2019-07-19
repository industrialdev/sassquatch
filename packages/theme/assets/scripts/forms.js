(function(){
  function addSelectIcon(){
    if(!$(this).closest('.form__select-wrapper').length){
      $(this).wrap('<div class="form__select-wrapper"></div>');
      $(this).closest('.form__select-wrapper').append('<i class="far fa-angle-down" aria-hidden="true"></i>')
    }
  }

  $('select').each(addSelectIcon);


  /* AJAX-ify a search form.
      -- This basically lets you tag a form with .form--hijax and it will automatically enhance it.
      -- It will also override any internal links to be "hijaxed" (for reset buttons or saved searches)
   */
  function loadPage(url, $target){

    $target.addClass('loading');

    return $.ajax({
      url: url,
    }).done(function(data){

      var $content = $(data).find("#" + $target.attr('id'));
      $target.html($content.html());

      // re-add the select arrows
      $target.find('select').each(addSelectIcon);

    }).fail(function(){
      $target.text("Sorry, an error occured.");
    }).always(function(){
      $target.removeClass('loading');
    });
  }

  $(window).on("popstate", function() {
    var $target = $("#"+ $('form.form--hijax').data('target'));
    if ($target.length > 0){
      loadPage(window.location.href, $target);
    }
  });

  $(document).on('click', 'form.form--hijax a', function(e){
    var url = $(this).attr('href');
    var $target = $("#" + $(this).parents('form.form--hijax').data('target'));

    loadPage(url, $target).done(function(){
      history.pushState({}, "", url);
    });

    e.preventDefault();
    return false
  });

  $(document).on('submit', 'form.form--hijax', function(e){
    var base = $(this).attr('action') || "";
    var data = $(this).serialize();
    var url = base + "?" + data;
    var $target = $("#" + $(this).data('target'));

    loadPage(url, $target).done(function(){
      history.pushState({}, "", url);
    });

    e.preventDefault();
    return false;
  });
})();