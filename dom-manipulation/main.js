var clickTimes = 0;
var hotButLoc = document.querySelector('.hot-button');
var clickCountLoc = document.querySelector('.click-count');

function handleClick(event) {
  clickTimes++;
  clickCountLoc.textContent = 'Clicks: ' + clickTimes;
  if (clickTimes < 4) {
    hotButLoc.className = 'hot-button cold';
  } else if (clickTimes < 7) {
    hotButLoc.className = 'hot-button cool';
  } else if (clickTimes < 10) {
    hotButLoc.className = 'hot-button tepid';
  } else if (clickTimes < 13) {
    hotButLoc.className = 'hot-button warm';
  } else if (clickTimes < 16) {
    hotButLoc.className = 'hot-button hot';
  } else {
    hotButLoc.className = 'hot-button nuclear';
  }
}

hotButLoc.addEventListener('click', handleClick);
