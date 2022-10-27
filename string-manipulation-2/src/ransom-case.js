/* exported ransomCase */
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
