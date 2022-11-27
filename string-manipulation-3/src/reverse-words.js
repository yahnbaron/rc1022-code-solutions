/* exported reverseWords
  create array of individual words in string as well as a return string
  create a looop to go through each word in array and at each word,
  concatenate each letter in reverse to the return string and a space inbetween */
function reverseWords(string) {
  var wordsArray = string.split(' ');
  var finalSentence = '';
  for (var i = 0; i < wordsArray.length; i++) {
    if (i) {
      finalSentence += ' ';
    }
    for (var x = wordsArray[i].length - 1; x > -1; x--) {
      finalSentence += wordsArray[i][x];
    }
  }
  return finalSentence;
}
