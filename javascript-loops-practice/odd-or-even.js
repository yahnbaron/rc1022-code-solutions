/* exported oddOrEven */
function oddOrEven(numbers) {
  var numStats = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 > 0) {
      numStats.push('odd');
    } else {
      numStats.push('even');
    }
  }
  return numStats;
}
