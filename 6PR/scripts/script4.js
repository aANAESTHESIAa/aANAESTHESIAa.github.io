document.addEventListener("DOMContentLoaded", ready);

function ready() {
  document.getElementById('menu_about').addEventListener("mouseover", openSubmenu);
  document.getElementById('menu_about').addEventListener("mouseout", closeSubmenu);
     
}

function openSubmenu(){
  var submenu = document.getElementById('id_submenu');
  submenu.style.display = 'list-item';
}

function closeSubmenu(){
  var submenu = document.getElementById('id_submenu');
  submenu.style.display = 'none';
}
