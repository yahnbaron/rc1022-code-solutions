/* exported invert
  loop over each key in source and make newObj[source[key]] equal to key, then return that object
*/
function invert(source) {
  var newObj = {};
  for (var key in source) {
    newObj[source[key]] = key;
  }
  return newObj;
}
