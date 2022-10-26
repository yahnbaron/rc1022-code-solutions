var formLoc = document.querySelector('#contact-form');

function handleSubmit(event) {
  event.preventDefault();
  var messageData = {};
  messageData.name = formLoc.elements.name.value;
  messageData.email = formLoc.elements.email.value;
  messageData.message = formLoc.elements.message.value;
  console.log('messageData: ', messageData);
  formLoc.reset();
}

formLoc.addEventListener('submit', handleSubmit);
