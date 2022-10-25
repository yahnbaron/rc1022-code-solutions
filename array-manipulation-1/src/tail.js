/* exported tail */
// define function and have it make new array that has all values pushed from array[1] through array[length-1]
function tail(array) {
  var newArr = [];
  for (var i = 1; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
