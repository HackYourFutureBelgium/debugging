'use strict';

// refactor this code to use a _?_:_ instead of a conditional

const isLoggedIn = _;
const secretInformation = _;
const warningMessage = _;
console.log(isLoggedIn, secretInformation, warningMessage);

let toDisplay;
if (isLoggedIn) {
  toDisplay = secretInformation;
} else {
  toDisplay = warningMessage;
}
console.log(toDisplay);
