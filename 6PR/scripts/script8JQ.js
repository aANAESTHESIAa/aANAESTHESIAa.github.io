var images = new Array();

images[0] = './images/img1.jpg';
images[1] = './images/img2.jpg';
images[2] = './images/img3.jpg';
images[3] = './images/img4.jpg';
images[4] = './images/img5.jpg';
images[5] = './images/img6.jpg';
images[6] = './images/img7.jpg';
images[7] = './images/img8.jpg';
images[8] = './images/img9.jpg';
images[9] = './images/img10.jpg';
images[10] = './images/img11.jpg';

var center_index = 0;
var left_index = images.length - 1;
var right_index = center_index + 1;

$(document).ready(function(){
  $('#left_img').click(function(){
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
  });

  $('#right_img').click(function(){
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
  });

  viewImages();
});


function viewImages() {
  $('#left_img').attr('src', images[left_index]);
  $('#center_img').attr('src', images[center_index]);
  $('#right_img').attr('src', images[right_index]);
}
