var student = {
  firstName: 'Baron',
  lastName: 'Yahn',
  age: 27
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('fullName: ' + fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Truck Operator';
console.log('student.livesInIrvine: ' + student.livesInIrvine);
console.log('student.previousOccupation: ' + student.previousOccupation);

var vehicle = {
  make: 'Lexus',
  model: 'GX 470',
  year: 2007
};

vehicle.color = 'Silver';
vehicle.isConvertible = false;
console.log('color: ' + vehicle['color']);
console.log('isConvertible: ' + vehicle['isConvertible']);
console.log('value of vehicle:');
console.log(vehicle);

var pet = {
  name: 'Chamoy',
  type: 'Corgi'
};
delete pet.name;
delete pet.type;
console.log('value of pet:');
console.log(pet);
