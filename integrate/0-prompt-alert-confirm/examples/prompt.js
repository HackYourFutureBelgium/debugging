// #todo

'use strict';

// prompt lets users type input for your programs
//  a string will be returned if the user enters text
//  null will be returned if the user cancels
const promptMessage = 'Type something, or nothing. Click "ok", or "cancel".';
const promptValue = prompt(promptMessage);

console.log('promptValue:', typeof promptValue, promptValue);

if (typeof promptValue === 'string') {
  alert(promptValue);
} else if (promptValue === null) {
  alert(':(');
} else {
  // unreachable path!
  // all prompted values are either a string, or null
}
