/* exported take */

function take(array, count) {
  var newArray = [];
  if (array.length === 0) {
    return newArray;
  } else {
    for (var i = 0; i < count; i++) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
