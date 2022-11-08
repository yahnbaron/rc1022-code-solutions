/* exported invert
  loop over each key in source and make newObj[key] equal to key, then return that object
*/
function invert(source) {
  var newObj = {};
  for (var key in source) {
    newObj[key] = source[key];
  }
  // console.log(newObj);
  return newObj;
}
