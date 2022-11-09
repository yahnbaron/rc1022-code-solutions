var $countdown = document.querySelector('.countdown-display');
var countdown = parseInt($countdown.textContent);

var intervalId = setInterval(time, 1000);

function time() {
  if (countdown > 0) {
    $countdown.textContent = countdown;
    countdown--;
  } else {
    $countdown.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalId);
  }
}
