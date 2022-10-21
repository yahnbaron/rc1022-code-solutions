/* exported isUpperCased */
// create a storage true boolean for the return value
// go through every letter in word and update the boolean false if lowercase
// return the boolean

function isUpperCased(word) {
  var areTheyUp = true;
  for (var i = 0; i < word.length; i++) {
    if (word[i] === word[i].toLowerCase()) {
      areTheyUp = false;
    }
  }
  return areTheyUp;
}
