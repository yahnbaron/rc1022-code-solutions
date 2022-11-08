/* exported swapChars */
/* create new variable for char at first and second indexes,
   create empty string variable for the return statement
   create for loop that goes through each index of the string and
   if index is specified index, push that value, otherwise push string at index */

function swapChars(firstIndex, secondIndex, string) {
  var firstLetter = string[secondIndex];
  var secondLetter = string[firstIndex];
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newString += firstLetter;
    } else if (i === secondIndex) {
      newString += secondLetter;
    } else {
      newString += string[i];
    }
  }
  return newString;
}
