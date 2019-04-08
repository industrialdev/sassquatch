(function($){

  var notificationDismissed = getCookie('notificationDismissed');

  $(document).on('click', '.notification__dismiss', function(){
    $(this).closest('.notification').slideUp('fast', function(){
      $(this).remove();
      setCookie('notificationDismissed', 1, 365);
    });
  });

  setTimeout(function(){
    if(notificationDismissed != 1){
      $('.notification').addClass('notification--active');
    }else{
      $('.notification').remove();
    }
  }, 3000);

  function setCookie(cname, cvalue, exdays) {
    var cookieDate = new Date();
    cookieDate.setTime(cookieDate.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ cookieDate.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

})(jQuery);