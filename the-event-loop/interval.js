let count = 3;
const countDown = () => {
  if (count === 0) {
    console.log('Blast off!');
    clearInterval(kill);
    return;
  }
  console.log(count);
  count--;
};
const kill = setInterval(countDown, 1000);
