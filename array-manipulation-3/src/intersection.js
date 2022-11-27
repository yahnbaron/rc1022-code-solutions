/* exported intersection
  create new return array, and then at each index
  of first array, check if it exists in second
  pushing each if so, then return returnArray */
function intersection(first, second) {
  var returnArray = [];
  for (var i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) !== -1) {
      returnArray.push(first[i]);
    }
  }
  return returnArray;
}
