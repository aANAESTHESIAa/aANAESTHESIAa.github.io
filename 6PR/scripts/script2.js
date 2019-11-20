document.addEventListener("DOMContentLoaded", ready);

function ready() {
  first_header.onclick = function() {
    if(document.getElementById('first_text').style.display=='none') {
      document.getElementById('first_text').style.display = 'block';
    }
    else {
      document.getElementById('first_text').style.display = 'none';
    }
  }

  second_header.onclick = function() {
    if(document.getElementById('second_text').style.display=='none') {
      document.getElementById('second_text').style.display = 'block';
    }
    else {
      document.getElementById('second_text').style.display = 'none';
    }
  }
}
