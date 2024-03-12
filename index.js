// Code your solution in this file!

const returnFirstTwoDrivers = (drivers) => {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = (drivers) => {
  return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (x) => {
  return (fare) => {
    return fare * x;
  };
};

const fareDoubler = (createFareMultiplier) => createFareMultiplier * 2;

const fareTripler = (createFareMultiplier) => createFareMultiplier * 3;

const selectDifferentDrivers = (drivers, a) => {
  return a(drivers);
};
const drivers = ["'Antonia', 'Nuru', 'Amari', 'Mo'"];
