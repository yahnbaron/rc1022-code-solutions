var taskList = document.querySelector('.task-list');
taskList.addEventListener('click', ayoClick);

function ayoClick(event) {
  console.log('event.target: ', event.target);
  console.log('event.target.tagName: ', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    var listItem = event.target.closest('.task-list-item');
    console.log('closest tasklistitem: ', listItem);
    listItem.remove();
  }
}
