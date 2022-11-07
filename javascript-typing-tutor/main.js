var level = 0;
var spanList = document.querySelectorAll('span');

document.addEventListener('keydown', keyDoer);

function keyDoer(event) {
  if (event.key === spanList[level].textContent) {
    spanList[level].className = 'green-text';
    spanList[level + 1].className = 'black-cursor';
    level++;
  } else {
    spanList[level].className = 'red-text red-cursor';
  }
}
