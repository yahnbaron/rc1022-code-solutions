/* exported reverse */
// create function that makes new array and sets all its values from array.length-1 to zero
function reverse(array) {
  var newArr = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArr.push(array[i]);
  }
  return newArr;
}
