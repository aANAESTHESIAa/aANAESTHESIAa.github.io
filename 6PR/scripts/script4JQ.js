$(document).ready(function(){
  $('#cursor').attr('src', images[left_index]);

  $('#menu_about').mouseover(function(){
    $('#id_submenu').show();
  });

  $('#menu_about').mouseout(function(){
    $('#id_submenu').hide();
  });

  });
