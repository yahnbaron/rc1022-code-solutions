var $message = document.querySelector('.message');

setTimeout(messenger, 2000);

function messenger() {
  $message.textContent = 'Hello There';
}
