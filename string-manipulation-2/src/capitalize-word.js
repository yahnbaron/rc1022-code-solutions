/* exported capitalizeWord */
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
