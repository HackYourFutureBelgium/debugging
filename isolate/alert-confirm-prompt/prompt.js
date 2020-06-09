'use strict';

// prompt returns a string or null
const promptMessage = 'Type something, or nothing. Click "ok", or "cancel".';
const promptValue = prompt(promptMessage);

alert(promptValue);

console.log(typeof promptValue, promptValue);
console.assert(typeof promptValue === 'string', 'you clicked "ok"');
console.assert(promptValue === null, 'you clicked "cancel"');

