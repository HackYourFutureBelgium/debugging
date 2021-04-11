'use strict';

// refactor this code to use || instead of a conditional

const isAfterFive = _;
const isTheWeekend = _;
console.log(isAfterFive, isTheWeekend);

let stopWorking = isAfterFive === true;
if (!stopWorking) {
  stopWorking = isTheWeekend === true;
}
console.log(stopWorking);
