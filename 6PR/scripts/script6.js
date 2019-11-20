document.addEventListener("DOMContentLoaded", ready);

function ready() {
  var cs = document.getElementById('cursor');
  cs.src = './images/try.gif';
  cs.style.position = 'absolute';
  cs.style.left = -40 +'px';
  cs.style.top = -40 +'px';
  document.onmousemove = function (even){
    cs.style.left = (even.pageX + cs.clientWidth - 35) +'px';
    cs.style.top = (even.pageY + cs.clientHeight - 35) +'px';
      
  }
}
