'use strict';

// confirm returns either true or false
const confirmMessage = 'Click "ok", or "cancel".';
const confirmValue = confirm(confirmMessage);

alert(confirmValue);

console.log(typeof confirmValue, confirmValue);
console.assert(confirmValue === true, 'you clicked "ok"');
console.assert(confirmValue === false, 'you clicked "cancel"');
