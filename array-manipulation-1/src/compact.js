/* exported compact */
function compact(array) {
  var newArray = [];
  for (var x = 0; x < array.length; x++) {
    if (array[x]) {
      newArray.push(array[x]);
    }
  }
  return newArray;
}
