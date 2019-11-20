document.addEventListener("DOMContentLoaded", viewImages);

var images = new Array();
var i = 0;

images[0] = './images/1.jpeg';
images[1] = './images/2.jpg';
images[2] = './images/3.jpg';
images[3] = './images/4.jpg';
images[4] = './images/5.jpg';
images[5] = './images/6.jpg';
images[6] = './images/7.jpg';
images[7] = './images/8.jpg';
images[8] = './images/9.jpg';
images[9] = './images/10.jpg';
images[10] = './images/11.jpg';

function viewImages() {
  var image = document.getElementById('my_img');
  image.src = images[i];
  image.style.width = 400+'px';
  image.style.height = 700+'px';

  i++;
  if (i == 11){
    i = 0;
  }

  setTimeout('viewImages()', 500);
}
