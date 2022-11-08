/* exported ransomCase
  create lowercase version of given string, then capitalize every other word and concatenate it to the return string
*/
function ransomCase(string) {
  var lowString = string.toLowerCase();
  var returnString = lowString[0];
  for (var i = 1; i < string.length; i++) {
    if (i % 2 === 0) {
      returnString += lowString[i];
    } else {
      returnString += lowString[i].toUpperCase();
    }
  }
  return returnString;
}
