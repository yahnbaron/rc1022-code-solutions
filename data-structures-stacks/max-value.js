/* exported maxValue */

function maxValue(stack) {
  let maxValue = stack.pop();
  if (maxValue === undefined) return -Infinity;
  let check = stack.pop();
  while (check !== undefined) {
    if (check > maxValue) {
      maxValue = check;
    }
    check = stack.pop();
  }
  return maxValue;
}
