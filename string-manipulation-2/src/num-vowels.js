/* exported numVowels
  check and add to tally if any letter of the string is a vowel, then return tally
*/
function numVowels(string) {
  var vowCount = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u' ||
      string[i] === 'A' || string[i] === 'E' || string[i] === 'I' || string[i] === 'O' || string[i] === 'U') {
      vowCount++;
    }
  }
  return vowCount;
}
