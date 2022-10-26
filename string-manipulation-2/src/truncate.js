/* exported truncate */
function truncate(length, string) {
  var newString = '';
  var smartLength = 0;
  if (length < string.length) {
    smartLength = length;
  } else {
    smartLength = string.length;
  }
  for (var i = 0; i < smartLength; i++) {
    newString += string[i];
  }
  newString += '...';
  return newString;
}
