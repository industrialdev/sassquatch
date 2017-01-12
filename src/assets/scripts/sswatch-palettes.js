(function($){
  generatePalette();
  $(".palette_info-default, .palette_info-light, .palette_info-dark").click(function(){
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(this).text()).select();
    document.execCommand("copy");
    $temp.remove();
  });
})(jQuery);

function generatePalette(){
  var colorCount = 6;
  $(".palettes").append("<div class='row'></div>");
  for(var i = 0; i <= (colorCount - 1); i++){
    $(".palettes .row").append("<div class='col_md-4'><div class='palette palette_" + (i + 1) + "'><div class='palette_light'></div><div class='palette_dark'></div></div><div class='palette_" + (i + 1) + "-info'><div class='palette_info-light'><span class='copy fa fa-files-o' aria-hidden='true'></span></div><div class='palette_info-default'><span class='copy fa fa-files-o' aria-hidden='true'></span></div><div class='palette_info-dark'><span class='copy fa fa-files-o' aria-hidden='true'></span></div></div></div>");
  }


  $(".palette").each(function(){
    var defaultColor = $(this).css('backgroundColor');
    var lightColor = $(this).find('.palette_light').css('backgroundColor');
    var darkColor = $(this).find('.palette_dark').css('backgroundColor');
    $(this).next('div').find('.palette_info-default').prepend(rgb2hex(defaultColor));
    $(this).next('div').find('.palette_info-light').prepend(rgb2hex(lightColor));
    $(this).next('div').find('.palette_info-dark').prepend(rgb2hex(darkColor));
  });
}

function rgb2hex(rgb) {
  rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  function hex(x) {
      return ("0" + parseInt(x).toString(16)).slice(-2);
  }
  return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}