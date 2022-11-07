/* exported pick */
function pick(source, keys) {
  var newObj = {};
  for (var i = 0; i < keys.length; i++) {
    for (var keez in source) {
      if (keys[i] === keez) {
        newObj[keys] = source[keez];
      }
    }
  }
}
