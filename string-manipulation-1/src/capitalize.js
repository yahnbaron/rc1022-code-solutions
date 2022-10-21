/* exported capitalize */
// make a new string
// concatenate the new string with the upperCase value for the first letter of word
// concatenate the new string with the isLowerCase value for the rest of the letters
function capitalize(word) {
  var newWord = '';
  newWord = newWord + word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    newWord = newWord + word[i].toLowerCase();
  }
  return newWord;
}
