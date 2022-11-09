var $countdown = document.querySelector('.countdown-display');

var intervalId = setInterval(time, 1000);

function time() {
  if ($countdown.textContent === '4') {
    $countdown.textContent = '3';
  } else if ($countdown.textContent === '3') {
    $countdown.textContent = '2';
  } else if ($countdown.textContent === '2') {
    $countdown.textContent = '1';
  } else if ($countdown.textContent === '1') {
    $countdown.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalId);
  }
}
