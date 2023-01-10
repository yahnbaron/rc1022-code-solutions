/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const second = list.next;
  const newList = new LinkedList(value);
  list.next = newList;
  list.next.next = second;
  return list;
}
