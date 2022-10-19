var x = 10;
var y = 20;
var z = 30;
var maximumValue = Math.max(x, y, z);
console.log('maxval:', maximumValue);
var heroes = [
  'me',
  'myself',
  'I',
  'baronYahn'
];
var randomNumber = Math.random();
randomNumber *= heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex: ', randomIndex);
var randomHero = heroes[randomIndex];
console.log('randomHero: ', randomHero);

var library = [
  {
    title: 'yeet, an autobiography',
    author: 'Baron Yahn'
  },
  {
    title: 'the dank caterpillar book for five-year-olds',
    author: 'Joseph McBiden'
  },
  {
    title: 'crayon fun time, an exhilirating exercise for 60-year-olds',
    author: 'Franklin Delano Stalininni'
  }
];
var lastBook = library.pop();
console.log('lastBook: ', lastBook);
var firstBook = library.shift();
console.log('firstBook: ', firstBook);
var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library: ', library);

var fullName = 'Baron Yahn';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName: ', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName: ', sayMyName);
