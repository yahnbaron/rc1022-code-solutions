/* exported dropRight */
function dropRight(array, count) {
  var newArray = [];
  if (array.length < count) {
    return array;
  }
  for (var i = 0; i < array.length - count; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
