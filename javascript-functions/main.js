function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

var seconds = convertMinutesToSeconds(10);
console.log(seconds, ' seconds');

function greet(name) {
  var greeting = 'Hello, ' + name + '!';
  return greeting;
}

var greeting = greet('Baron');
console.log(greeting);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var area = getArea(5, 10);
console.log('Area is ', area);

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}

var person = {
  firstName: 'Baron',
  lastName: 'Yahn'
};

var firstName = getFirstName(person);
console.log('The first name is: ', firstName);

function getLastElement(array) {
  var items = array.length;
  var lastOne = items - 1;
  var lastElement = array[lastOne];
  return lastElement;
}

var array = [
  1,
  2,
  3,
  4,
  5
];

var lastElement = getLastElement(array);
console.log('The last element is: ', lastElement);
