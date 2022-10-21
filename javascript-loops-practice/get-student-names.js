/* exported getStudentNames */
function getStudentNames(students) {
  var onlyName = [];
  for (var i = 0; i < students.length; i++) {
    onlyName.push(students[i].name);
  }
  return onlyName;
}
