function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}
var clickButLoc = document.querySelector('button.click-button');
clickButLoc.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered', event, event.target);
}
var hovButLoc = document.querySelector('.hover-button');
hovButLoc.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked', event, event.target);
}
var dClickLoc = document.querySelector('.double-click-button');
dClickLoc.addEventListener('dblclick', handleDoubleClick);
