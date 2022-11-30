/* exported difference
  create a new array for return then loop through each value of the first array
  checking if any index is present in second array, pushing index to return array if not
  then iterate over the second array, checking if any index is present in the first array
  if not, then push to return array then return that */
function difference(first, second) {
  var returnArray = [];
  for (var i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) === -1) {
      returnArray.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (first.indexOf(second[j]) === -1) {
      returnArray.push(second[j]);
    }
  }
  return returnArray;
}
