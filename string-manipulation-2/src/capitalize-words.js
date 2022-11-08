/* exported capitalizeWords
  create return string and make it the uppercase first letter
  check if the remainder of the letters are after a space character and capitalize them if so
  concatenate everything together in the return string and return it
*/
function capitalizeWords(string) {
  var returnString = string[0].toUpperCase();
  for (var i = 1; i < string.length; i++) {
    if (string[i - 1] === ' ') {
      returnString += string[i].toUpperCase();
    } else {
      returnString += string[i].toLowerCase();
    }
  }
  return returnString;
}
