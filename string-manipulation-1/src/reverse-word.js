/* exported reverseWord */
/* define function reverseWord(word)
   create return string ''
   find the length of the word
   concatenate the return string with word at every position starting from length - 1 to 0 */
function reverseWord(word) {
  var backWord = '';
  for (var i = word.length - 1; i >= 0; i--) {
    backWord += word[i];
  }
  return backWord;
}
