/* exported unique
  create a new array to return, then at each index of the array check
  if the word already exists in the new array, pushing value at index to new array if it doesnt */
function unique(array) {
  var returnArray = [];
  for (var i = 0; i < array.length; i++) {
    if (returnArray.indexOf(array[i]) === -1) {
      returnArray.push(array[i]);
    }
  }
  return returnArray;
}
