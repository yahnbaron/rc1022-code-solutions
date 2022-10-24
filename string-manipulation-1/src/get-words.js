/* exported getWords */
// define a function for getWords(string)
// make a storage array [] for output
// use the split method to assign separated words into storage
function getWords(string) {
  if (string.length > 0) {
    return string.split(' ');
  } else {
    var none = [];
    return none;
  }
}
