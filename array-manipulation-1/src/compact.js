/* exported compact */
function compact(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== false && array[i] !== null && array[i] !== 0 &&
      array[i] !== '-0' && array[i] !== undefined && array[i] !== '') {
      newArray.push(array[i]);
    }
  }
  var newerArray = [];
  for (var x = 0; x < newArray.length; x++) {
    if (newArray[x]) {
      newerArray.push(newArray[x]);
    }
  }
  return newerArray;
}
