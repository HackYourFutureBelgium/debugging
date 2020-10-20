'use strict';

// alert displays whatever you pass as an argument
const alertMessage = 'alerted!';
const alertValue = alert(alertMessage);

console.log(typeof alertValue, alertValue);
console.assert(alertValue === undefined, 'alert always returns undefined');
