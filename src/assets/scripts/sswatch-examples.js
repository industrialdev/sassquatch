(function($){

  // User selection of previewed grid
  var selectedGrid = $("#select-grid").val();
  showGrid(selectedGrid);

  $("#select-grid").change(function(){
    selectedGrid = $("#select-grid").val();
    showGrid(selectedGrid);
  });

})(jQuery);

function showGrid(selectedGrid){

  $(".grid-preview").remove();

  if(selectedGrid == "default"){
    selectedGrid = "";
  }else{
    selectedGrid = selectedGrid + "-";
  }

  var gridHtml = '<div class="grid-preview"><div class="drawer_wrapper"><button class="btn btn_drawer-toggle drawer-toggle" aria-expanded="false">Preview Grid<i class="fa fa-angle-down"></i></button><div class="card drawer" aria-expanded="false"><div class="row"><div class="col_' + selectedGrid + '1"><div class="card"><span class="ellipsis">.col_' + selectedGrid + '1</span></div></div><div class="col_' + selectedGrid + '11"><div class="card"><span class="ellipsis">.col_' + selectedGrid + '11</span></div></div></div><div class="row"><div class="col_' + selectedGrid + '2"><div class="card"><span class="ellipsis">.col_' + selectedGrid + '2</span></div></div><div class="col_' + selectedGrid + '10"><div class="card"><span class="ellipsis">.col_' + selectedGrid + '10</span></div></div></div><div class="row"><div class="col_' + selectedGrid + '3"><div class="card"><span class="ellipsis">.col_' + selectedGrid + '3</span></div></div><div class="col_' + selectedGrid + '9"><div class="card"><span class="ellipsis">.col_' + selectedGrid + '9</span></div></div></div><div class="row"><div class="col_' + selectedGrid + '4"><div class="card"><span class="ellipsis">.col_' + selectedGrid + '4</span></div></div><div class="col_' + selectedGrid + '8"><div class="card"><span class="ellipsis">.col_' + selectedGrid + '8</span></div></div></div><div class="row"><div class="col_' + selectedGrid + '5"><div class="card"><span class="ellipsis">.col_' + selectedGrid + '5</span></div></div><div class="col_' + selectedGrid + '7"><div class="card"><span class="ellipsis">.col_' + selectedGrid + '7</span></div></div></div><div class="row"><div class="col_' + selectedGrid + '6"><div class="card"><span class="ellipsis">.col_' + selectedGrid + '6</span></div></div><div class="col_' + selectedGrid + '6"><div class="card"><span class="ellipsis">.col_' + selectedGrid + '6</span></div></div></div><div class="row"><div class="col_' + selectedGrid + '12"><div class="card"><span class="ellipsis">.col_' + selectedGrid + '12</span></div></div></div></div></div></div>';

  $("#select-grid").closest('.form-group').after(gridHtml);

}