/* exported capitalizeWord
  check if lowered input is equal to javascript and return correctly cxapitalized JS if so
  create a new word string, and then concatenate it with the uppercase first letter
  loop through the last of the letters and concatenate each letter in lowercase to the new word and return it
*/
function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  } else {
    var newWord = '';
    newWord += word[0].toUpperCase();
    for (var i = 1; i < word.length; i++) {
      newWord += word[i].toLowerCase();
    }
    return newWord;
  }
}
