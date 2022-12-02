/* exported isPalindromic
  create a string thats equal to the reverse of the spaceless given string and compare if equal
*/
function isPalindromic(string) {
  var backString = '';
  for (var i = string.length - 1; i >= 0; i--) {
    backString = backString + string[i];
  }
  backString = backString.replace(' ', '');
  var stringNoSpace = string.replace(' ', '');
  return (backString.toLowerCase() === stringNoSpace.toLowerCase());
}
