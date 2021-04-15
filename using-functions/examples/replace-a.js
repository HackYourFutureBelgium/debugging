'use strict';

/* replace

  a program that processes text by replacing something with something else

*/

/* ===== declare functions ===== */

/**
 * returns a new string with all instances of the old thing replaced by the new thing
 * @param {string} text - the original text to modify
 * @param {string} oldThing - what to replace in the text
 * @param {string} newThing - what should replace the old thing
 * @returns {string} text with the old is replaced by the new
 */
const replace = (text = '', oldThing = '', newThing = '') => {
  return text.replaceAll(oldThing, newThing);
};

console.assert(replace('asdf', 'sd', '__') === 'a__f', 'Test 1');
console.assert(replace('asdf', 'op', '!') === 'asdf', 'Test 2');
console.assert(replace('pPpP', 'P', 'u') === 'pupu', 'Test 3');
console.assert(replace('12345', '', '.') === '.1.2.3.4.5.', 'Test 4');
console.assert(replace('water mellon', ' ', '') === 'watermellon', 'Test 5');

/* ===== main program (use functions) ===== */

alert(`first you will enter some text, then decide what to replace:

- enter the old thing to replace
- and the new thing to replace it`);

let original = null;
while (original === null) {
  original = prompt('enter the original text to modify');
}

let replaceThis = null;
while (replaceThis === null) {
  replaceThis = prompt('enter the text to replace');
}

let replacement = null;
while (replacement === null) {
  replacement = prompt('enter the replacement text');
}

const newText = replace(original, replaceThis, replacement);

alert(`before: ${original}
after: ${newText}`);
