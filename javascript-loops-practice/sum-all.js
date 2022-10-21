/* exported sumAll */
function sumAll(numbers) {
  var number = 0;
  for (var i = 0; i <= (numbers.length - 1); i++) {
    number = number + numbers[i];
  }
  return number;
}
