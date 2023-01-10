/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) return;
  for (let i = 0; i < index; i++) {
    const first = queue.dequeue();
    queue.enqueue(first);
  }
  return queue.dequeue();
}
