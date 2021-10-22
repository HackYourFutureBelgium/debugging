// #todo

'use strict';

// alert displays whatever you pass as an argument
//  the value will be cast to a string

const alertMessage = 'alert!';
const alertValue = alert(alertMessage);

console.log('alertValue:', typeof alertValue, alertValue);

if (alertValue === undefined) {
  alert('you have been alerted');
} else {
  // unreachable path!
  // alert always returns undefined
}
