var onStatus = true;
var bulbLoc = document.querySelector('.bulb');
var containerLoc = document.querySelector('.container-on');

function hitTheLight(event) {
  if (onStatus === true) {
    onStatus = false;
    bulbLoc.className = 'bulb bulb-off';
    containerLoc.className = 'container-off';
  } else if (onStatus === false) {
    onStatus = true;
    bulbLoc.className = 'bulb bulb-on';
    containerLoc.className = 'container-on';
  }
}

bulbLoc.addEventListener('click', hitTheLight);
