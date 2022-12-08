const takeAChance = require('./take-a-chance');

const dontBreak = takeAChance('Baron');

dontBreak.then(value => {
  console.log(value);
});

dontBreak.catch(error => {
  console.error(error.message);
});
