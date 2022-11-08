/* exported lastChars */
/* determine if given length arg is longer than string length
   determne start point as string length minus desired length
   loop through string at starting point through string length, pushing each value to retString  */

function lastChars(length, string) {
  var retString = '';
  var smartLength = 0;
  if (string.length < length) {
    smartLength = string.length;
  } else {
    smartLength = length;
  }

  var startingPoint = (string.length - smartLength);
  for (var i = startingPoint; i < string.length; i++) {
    retString += string[i];
  }
  return retString;
}
