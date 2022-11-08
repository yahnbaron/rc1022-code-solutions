/* exported pick
  create new empty object
  for every index in keys, check if its one of the properties of source
  if it is, put that key and its value in the new object and return it
*/
function pick(source, keys) {
  var newObj = {};
  for (var i = 0; i < keys.length; i++) {
    for (var keez in source) {
      if (keys[i] === keez && source[keez] !== undefined) {
        newObj[keez] = source[keez];
      }
    }
  }
  return newObj;
}
