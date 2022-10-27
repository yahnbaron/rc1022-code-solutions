/* exported firstChars */
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
