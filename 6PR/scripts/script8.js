document.addEventListener("DOMContentLoaded", ready);


function ready(){
  document.getElementById('left_img').addEventListener("click", backImg);
  document.getElementById('right_img').addEventListener("click", nextImg);
  document.getElementById('center_img').addEventListener("click", showImg);

  var images = new Array();

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

  var center_image = document.getElementById('center_img'), even = false;
  var left_image = document.getElementById('left_img');
  var right_image = document.getElementById('right_img');

  var center_index = 0;
  var left_index = images.length-1;
  var right_index = center_index+1;

  viewImages();

  function viewImages() {
    left_image.src = images[left_index];
    right_image.src = images[right_index];
    center_image.src = images[center_index];
  }

  function backImg(){
    center_index--;
    left_index = center_index-1;
    right_index = center_index+1;

    if (left_index == -1){
      left_index = 10;
    }
    if (center_index < 0){
      right_index = 0;
      center_index = 10;
      left_index = 9;
    }

    viewImages();
  }

  function nextImg(){
    center_index++;
    left_index = center_index-1;
    right_index = center_index+1;

    if (right_index == 11){
      right_index = 0;
    }
    if (center_index == 11){
      right_index = 1;
      center_index = 0;
      left_index = 10;
    }

    viewImages();
  }

  function showImg() {
    if(even){
      center_image.style.zoom = "1";
      left_image.style.display = 'inline';
      right_image.style.display = 'inline';
      even = false;
    }
    else {
      center_image.style.zoom = "2";
      left_image.style.display = 'none';
      right_image.style.display = 'none';
      even = true;
    }
  }
}
