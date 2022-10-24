/* exported isVowel */
function isVowel(char) {
  if (char.includes('A') || char.includes('a') || char.includes('E') || char.includes('e') || char.includes('I') || char.includes('i') ||
    char.includes('O') || char.includes('o') || char.includes('U') || char.includes('u')) {
    return true;
  } else {
    return false;
  }
}
