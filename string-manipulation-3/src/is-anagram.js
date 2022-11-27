/* exported isAnagram
  Create new strings without spaces, then compare the length comparing false if different
  for every digit in first spaceless string, check if second includes it
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
  if (noSpaceOne.length !== noSpaceTwo.length) {
    return false;
  }
  for (i = 0; i < noSpaceOne.length; i++) {
    if (!(noSpaceOne.includes(noSpaceTwo[i]))) {
      return false;
    }
  }
  return true;
}
