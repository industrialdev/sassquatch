/* Dropdown/Accordion toggle control */
// adds accessible icon to toggle button
$(document).on('click', ".dropdown__toggle, .accordion__toggle", function(event){
  event.preventDefault();
  $(this).toggleClass("open");
  var targetContent = '#' + $(this).attr('aria-controls');
  if($(this).hasClass("open")){
    $(targetContent).slideDown('fast').attr("aria-expanded", "true");
    $(this).attr("aria-expanded", "true");
  }else{
    $(targetContent).slideUp('fast').attr("aria-expanded", "false");
    $(this).attr("aria-expanded", "false");
  }
  $(this).focus();
});

// Close dropdown when it loses focus
$('body').focusin(function(e) {
  setTimeout(function(){
    $('.dropdown--accordion').each(function(){
      if(!$(e.target).is($(this).find('*'))){
        $(this).find('.dropdown__toggle').attr('aria-hidden', 'true'); // Voiceover safari fix
        $(this).find('.dropdown__toggle').each(function(){
          $('#' + $(this).attr('aria-controls')).slideUp('fast').removeClass('open').attr('aria-expanded', 'false');
        });
        $(this).find('.dropdown__toggle').attr('aria-expanded', 'false');
        $(this).find('.dropdown__toggle').removeClass('open');
        setTimeout(function(){
          $('.dropdown--accordion .dropdown__toggle').attr('aria-hidden', 'false'); // Voiceover safari fix
        }, 400);
      }
    });
  }, 250);
});
