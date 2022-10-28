var offTheHookBooks = [
  {
    isbn: '7684324537898543',
    title: 'a tail of two kitties',
    author: 'charles dickens'
  },
  {
    isbn: '3425796758434344',
    title: '1984',
    author: 'blink 182'
  },
  {
    isbn: '9083455764867582',
    title: 'watch this apple cure my cancer',
    author: 'steve jobs'
  }
];

console.log('offTheHookBooks array: ', offTheHookBooks);
console.log('typeof is a ', typeof offTheHookBooks);

var jesusChristThatsJSONBourne = JSON.stringify(offTheHookBooks);
console.log('jesusChristThatsJSONBourne stringified: ', jesusChristThatsJSONBourne);
console.log('typeof is a ', typeof jesusChristThatsJSONBourne);

var dataString = '{"id":"123456789","name":"Jason Bourne"}';
console.log('dataString: ', dataString);
console.log('typeof is a ', typeof dataString);

var newJSON = JSON.parse(dataString);
console.log('newJSON: ', newJSON);
console.log('typeof is a ', typeof newJSON);
