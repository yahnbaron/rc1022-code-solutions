/* exported getLength */

function getLength(list) {
  let i = 0;
  while (list !== null) {
    list = list.next;
    i++;
  }
  return i;
}
