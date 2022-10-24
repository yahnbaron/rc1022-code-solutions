/* exported getKeys */
function getKeys(object) {
  var arrayyy = [];
  for (var key in object) {
    arrayyy.push(key);
  }
  return arrayyy;
}
