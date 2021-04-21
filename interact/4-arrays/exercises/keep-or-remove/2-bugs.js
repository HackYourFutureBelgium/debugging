'use strict';

/*

  look out for:
  - loop conditions
  - primitive type checks
  - which array is being used
  - const vs. let

*/

alert(
  `enter as many nextInputs as you want.

When you're done entering strings press "cancel"`
);

// -- gather user nextInput --
const strings = [];
let nextInput = '';
while (nextInput === null) {
  nextInput = prompt('enter the next phrase or press "cancel"');

  // -- validate the nextInput --
  if (nextInput === '') {
    // -- check if the user nextInput nothing --
    alert('nothing is not allowed');
  } else if (typeof nextInput !== 'null') {
    // -- push the nextInput --
    strings.push(nextInput);
  }
}

// -- allow the user to filter their nextInputs --
const filtered = [];
for (const text of strings) {
  const keepIt = alert(`do you want to keep "${text}"?`);
  if (keepIt) {
    filtered.push(text);
  }
}

// -- build the final message --
let message = '';
for (const i = 0; i < strings.length; i++) {
  const text = filtered[i];
  message += `- "${text}"\n`;
}

// -- alert the final message --
alert(message);

// -- log for the developer --
console.log(strings, filtered);
