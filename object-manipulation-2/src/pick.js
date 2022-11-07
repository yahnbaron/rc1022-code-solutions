/* exported pick */
function pick(source, keys) {
  var newObj = {};
  for (var i = 0; i < keys.length; i++) {
    // console.log(i, keys[i]);
    for (var keez in source) {
      if (keys[i] === keez) {
        newObj[keez] = source[keez];
        // console.log('newObj', newObj);
      }
    }
  }
  return newObj;
}
