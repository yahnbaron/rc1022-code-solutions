/* exported omit */
function omit(source, keys) {
  var newObj = {};
  for (var i = 0; i < keys.length; i++) {
    for (var keez in source) {
      if (keys[i] !== keez && source[keez] !== undefined) {
        newObj[keez] = source[keez];
      }
    }
  }
  return newObj;
}
