/* exported swapFront */

function swapFront(list) {
  if (list.next === null) return list;
  const second = list.next.data;
  list.next.data = list.data;
  list.data = second;
  return list;
}
