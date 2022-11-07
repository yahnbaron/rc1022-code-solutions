/* exported pick */
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

/* function pick(source, keys) {
  var newObj = {};
  for (var keez in source) {
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] === keez) {
        newObj[keez] = source[keez];
      }
    }
  }
  return newObj;
}
*/
