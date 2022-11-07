function ExampleConstructor() {}

console.log('ExampleConstructor: ', ExampleConstructor.prototype);

console.log('typeof: ', typeof ExampleConstructor.prototype);

var newNew = new ExampleConstructor();

console.log('newNew: ', newNew);

var isInstanceOfExCon = (newNew instanceof ExampleConstructor);

console.log('isInstanceOfExCon ', isInstanceOfExCon);
