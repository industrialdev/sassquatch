(function($){
  var selectedGrid = $("#select-grid").val();
  showGrid(selectedGrid);

  $("#select-grid").change(function(){
    selectedGrid = $("#select-grid").val();
    showGrid(selectedGrid);
  });

})(jQuery);

function showGrid(selectedGrid){
  $("#grid-default, #grid-mobile, #grid-tablet, #grid-desktop, #grid-wide-desktop").hide();
  $("#grid-" + selectedGrid).show();
}