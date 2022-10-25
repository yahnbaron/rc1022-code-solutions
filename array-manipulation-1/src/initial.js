/* exported initial */
// define function that loops through and assigns vales to newarray from 0 to length-1
function initial(array) {
  var newArr = [];
  for (var i = 0; i < array.length - 1; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
