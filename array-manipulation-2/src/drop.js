/* exported drop */

function drop(array, count) {
  var newArray = [];
  if (array.length === 0) {
    return newArray;
  }
  for (var startPoint = count; startPoint < array.length; startPoint++) {
    newArray.push(array[startPoint]);
  }
  return newArray;
}
