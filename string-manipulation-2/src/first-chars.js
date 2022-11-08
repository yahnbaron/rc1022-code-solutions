/* exported firstChars
  make a return string, and then check which given arg has a higher length
  loop through each letter of the string and add it to the return string
*/
function firstChars(length, string) {
  var retString = '';
  var smartLength = 0;
  if (string.length < length) {
    smartLength = string.length;
  } else {
    smartLength = length;
  }
  for (var i = 0; i < smartLength; i++) {
    retString += string[i];
  }
  return retString;
}
