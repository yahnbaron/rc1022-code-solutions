/* exported chunk
  create new array for output
  loop over every sizeth index of array and push the sliced portion into new array
  return new array
*/
function chunk(array, size) {
  var newArray = [];
  for (var i = 0; i < array.length; i += size) {
    newArray.push(array.slice(i, i + size));
  }
  return newArray;
}
