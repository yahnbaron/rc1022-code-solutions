/* exported union
  create new array for return, then check each index of first array
  and if it does not exist in return, push it in */
function union(first, second) {
  var returnArray = [];
  for (var i = 0; i < first.length; i++) {
    if (!(returnArray.includes(first[i]))) {
      returnArray.push(first[i]);
    }
  }
  for (i = 0; i < second.length; i++) {
    if (!(returnArray.includes(second[i]))) {
      returnArray.push(second[i]);
    }
  }
  return returnArray;
}
