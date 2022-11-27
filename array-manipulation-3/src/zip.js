/* exported zip
  create a new return array, then establish length to loop
  loop through length and make a new array for a pair to be pushed into
  finally push the pair array into the return array */
function zip(first, second) {
  var pairedUp = [];
  var howMany = 0;
  if (first.length < second.length) {
    howMany = first.length;
  } else {
    howMany = second.length;
  }
  for (var i = 0; i < howMany; i++) {
    var pair = [];
    pair.push(first[i]);
    pair.push(second[i]);
    pairedUp.push(pair);
  }
  return pairedUp;
}
