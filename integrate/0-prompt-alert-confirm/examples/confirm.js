// #todo

'use strict';

// confirm returns either true or false
const confirmMessage = 'do you confirm?';
const confirmValue = confirm(confirmMessage);

console.log('confirmValue:', typeof confirmValue, confirmValue);

if (confirmValue === true) {
  alert('you confirmed');
} else if (confirmValue === false) {
  alert('you did not confirm');
} else {
  // unreachable path!
  // all confirm values are either true or false
}
