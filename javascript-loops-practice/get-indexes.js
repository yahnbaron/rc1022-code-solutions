/* exported getIndexes */
function getIndexes(array) {
  var indexes = [];
  var n = 0;
  while (n < array.length) {
    indexes.push(n);
    n++;
  }
  return indexes;
}
