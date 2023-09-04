const helpers = require('./helpers.js');

function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2);
}

function returnLastTwoDrivers(drivers) {
  return drivers.slice(-2);
}

const selectingDrivers = returnLastTwoDrivers() === returnLastTwoDrivers();

function createFareMultiplier(multiplier) {
  return function fareMultiplier(fare) {
    return fare * multiplier;
  };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, selector) {
  return selector(drivers);
}

const firstTwoDrivers = returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']);
const lastTwoDrivers = returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']);

console.log(firstTwoDrivers);
console.log(lastTwoDrivers);
console.log(createFareMultiplier(2));
console.log(fareDoubler);
console.log(fareTripler);
console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers));
console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnLastTwoDrivers));



//Using the tests to guide you, create the following deliverables:
//returnFirstTwoDrivers() 
//Declare the variable returnFirstTwoDrivers with const and assign an anonymous function to it.
// The assigned function should take one argument, an array containing the names of Scuber's drivers, and return a new array containing the first two drivers in the array: