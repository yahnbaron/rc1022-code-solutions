/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
function isUnderFive(number) {
  return number < 5;
}

function isEven(number) {
  return (number % 2) === 0;
}

function startsWithJ(string) {
  return string[0] === 'J';
}

function isOldEnoughToDrink(person) {
  return person.age >= 21;
}

function isOldEnoughToDrive(person) {
  return person.age >= 16;
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  if (pH > 14) {
    return 'invalid pH level';
  } else if (pH > 7) {
    return 'base';
  } else if (pH >= 0) {
    return 'acid';
  }
}

function introduceWarnerBro(name) {
  if (name === 'yakko' || name === 'wakko' || name === 'dot') {
    return "We're the Warner Brothers!";
  } else {
    return 'Goodnight Everybody!';
  }
}
