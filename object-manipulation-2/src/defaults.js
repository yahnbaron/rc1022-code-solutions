/* exported defaults
  create new function that will go through each key in source and see if theres any keys that dont exist in target. if true, then push the kay val pair to target
*/
function defaults(target, source) {
  for (var key in source) {
    if (!(key in target)) {
      target[key] = source[key];
    }
  }
}
