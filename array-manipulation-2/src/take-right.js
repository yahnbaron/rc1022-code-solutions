/* exported takeRight */
function takeRight(array, count) {
  var newArray = [];
  if (array.length === 0) {
    return newArray;
  } else if (count > array.length) {
    return array;
  }
  for (var i = array.length - count; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
