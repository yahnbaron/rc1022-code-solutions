function handleFocus(event) {
  console.log('focus fired', event.target.name);
}

function handleBlur(event) {
  console.log('blur fired', event.target.name);
}

function handleInput(event) {
  console.log('eventTargetName: ', event.target.name, 'eventTargetValue: ', event.target.value);
}

var usrName = document.querySelector('#user-name');
usrName.addEventListener('focus', handleFocus);
usrName.addEventListener('blur', handleBlur);
usrName.addEventListener('input', handleInput);

var usrEmail = document.querySelector('#user-email');
usrEmail.addEventListener('focus', handleFocus);
usrEmail.addEventListener('blur', handleBlur);
usrEmail.addEventListener('input', handleInput);

var usrMessage = document.querySelector('#user-message');
usrMessage.addEventListener('focus', handleFocus);
usrMessage.addEventListener('blur', handleBlur);
usrMessage.addEventListener('input', handleInput);
