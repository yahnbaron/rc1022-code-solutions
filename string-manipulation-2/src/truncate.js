/* exported truncate
  determine if string has shorter length than the length, and for each character of string , concat it with the new string until reaching length digits and return that
*/
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
