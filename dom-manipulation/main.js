var clickTimes = 0;
var hotButLoc = document.querySelector('.hot-button');
var clickCountLoc = document.querySelector('.click-count');

function handleClick(event) {
  clickTimes++;
  clickCountLoc.textContent = 'Clicks: ' + clickTimes;
  if (clickTimes > 3) {
    hotButLoc.className = 'hot-button cool';
  }
  if (clickTimes > 6) {
    hotButLoc.className = 'hot-button tepid';
  }
  if (clickTimes > 9) {
    hotButLoc.className = 'hot-button warm';
  }
  if (clickTimes > 12) {
    hotButLoc.className = 'hot-button hot';
  }
  if (clickTimes > 16) {
    hotButLoc.className = 'hot-button nuclear';
  }
}

hotButLoc.addEventListener('click', handleClick);
