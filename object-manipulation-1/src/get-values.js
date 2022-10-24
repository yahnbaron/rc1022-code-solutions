/* exported getValues */
function getValues(object) {
  var arrayyy = [];
  for (var key in object) {
    arrayyy.push(object[key]);
  }
  return arrayyy;
}
