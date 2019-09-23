//Creates the jumplink menu
if($(".jumplinks").length){
  var jumplinkCount = 0;
  $(".jumplink__target").each(function(){
    jumplinkCount++;
    var linkId = 'jumplink--' + jumplinkCount;
    $(this).attr('id', linkId);
    var linkTar = $(this).attr("id");
    var linkText = $(this).text();
    $(".jumplinks .nav__menu").append("<li class='nav__menu-item'><a href='#" + linkTar + "' class='nav__menu-link'><span>" + linkText + "</span></a></li>");
  });
}
