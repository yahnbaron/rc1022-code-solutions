/* exported includesSeven */
function includesSeven(array) {
  var sevensCounted = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      sevensCounted = true;
      break;
    }
  }
  return sevensCounted;
}
