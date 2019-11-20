document.addEventListener("DOMContentLoaded", ready);

function ready() {
  document.getElementById('color_table').addEventListener("click", textColor);
  document.getElementById('color_table').addEventListener("contextmenu", backColor);

  function textColor(elem) {
    var click_elem = null;
    click_elem = elem.target.id;
    document.body.style.color=click_elem;
  }
  function backColor(elem) {
    var click_elem = null;
    click_elem = elem.target.id;
    document.body.style.backgroundColor=click_elem;
  }
}
