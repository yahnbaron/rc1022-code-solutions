/* exported isAnagram
  Create new strings without spaces, then sort them and compare if equal
*/
function isAnagram(firstString, secondString) {
  var noSpaceOne = '';
  var noSpaceTwo = '';
  for (var i = 0; i < firstString.length; i++) {
    if (firstString[i] !== ' ') {
      noSpaceOne += firstString[i];
    }
  }
  for (i = 0; i < secondString.length; i++) {
    if (secondString[i] !== ' ') {
      noSpaceTwo += secondString[i];
    }
  }
  noSpaceOne = noSpaceOne.split('').sort().join('');
  noSpaceTwo = noSpaceTwo.split('').sort().join('');
  if (noSpaceOne !== noSpaceTwo) {
    return false;
  }
  return true;
}
