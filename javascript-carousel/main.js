var $leftButton = document.querySelector('.left-button');
var $rightButton = document.querySelector('.right-button');
var $image = document.querySelector('.pokemon');
var cir0 = document.querySelector('.circle0');
var cir1 = document.querySelector('.circle1');
var cir2 = document.querySelector('.circle2');
var cir3 = document.querySelector('.circle3');
var cir4 = document.querySelector('.circle4');
var dotRow = document.querySelector('.dots');
var whereWeAt = 0;
var pics = [
  'images/001.png',
  'images/004.png',
  'images/007.png',
  'images/025.png',
  'images/039.png'
];
var intervalId = setInterval(rotate, 3000);
var ballNodes = document.querySelectorAll('span');

function rotate() {
  ballClear();
  whereWeAt++;
  if (whereWeAt < 0 || whereWeAt > 4) {
    whereWeAt = 0;
  }
  clearInterval(intervalId);
  intervalId = setInterval(rotate, 3000);
  $image.setAttribute('src', pics[whereWeAt]);
  ballNodes[whereWeAt].className = 'fa-solid circle0 fa-circle';
}

function ballClear() {
  cir0.className = 'fa-solid circle0 fa-o';
  cir1.className = 'fa-solid circle1 fa-o';
  cir2.className = 'fa-solid circle2 fa-o';
  cir3.className = 'fa-solid circle3 fa-o';
  cir4.className = 'fa-solid circle4 fa-o';
}

dotRow.addEventListener('click', ballClick);

function ballClick(event) {
  if (event.target.className.includes(0)) {
    whereWeAt = -1;
    rotate();
  } else if (event.target.className.includes(1)) {
    whereWeAt = 0;
    rotate();
  } else if (event.target.className.includes(2)) {
    whereWeAt = 1;
    rotate();
  } else if (event.target.className.includes(3)) {
    whereWeAt = 2;
    rotate();
  } else if (event.target.className.includes(4)) {
    whereWeAt = 3;
    rotate();
  }
}

$rightButton.addEventListener('click', upOne);

function upOne(event) {
  rotate();
}

$leftButton.addEventListener('click', downOne);

function downOne(event) {
  whereWeAt = whereWeAt - 2;
  if (whereWeAt < -1) {
    whereWeAt = 3;
  }
  rotate();
}
