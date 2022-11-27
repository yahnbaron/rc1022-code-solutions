/* exported flatten
  return a new array being concatenated with the expanded array via spread syntax
  since spread syntax only goes one level deep */
function flatten(array) {
  return [].concat(...array);
}
