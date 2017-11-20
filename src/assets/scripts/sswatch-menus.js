(function($){

  //Creates the jumplink menu
  if($(".nav--jumplinks").length){
    var jumplinkCount = 0;
    $(".jumplink__target").each(function(){
      jumplinkCount++;
      var linkId = 'jumplink--' + jumplinkCount;
      $(this).attr('id', linkId);
      var linkTar = $(this).attr("id");
      var linkText = $(this).text();
      $(".nav--jumplinks .nav__menu").append("<li><a href='#" + linkTar + "'><span>" + linkText + "</span></a></li>");
    });
  }

})(jQuery);