/* exported lastChars */
function lastChars(length, string) {
  var retString = '';
  var smartLength = 0;
  if (string.length < length) {
    smartLength = string.length;
  } else {
    smartLength = length;
  }

  var remainder = (string.length - smartLength);
  for (var i = remainder; i < smartLength; i++) {
    retString += string[i];
  }
  return retString;
}
