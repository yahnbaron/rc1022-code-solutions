/* exported capitalizeWords */
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
