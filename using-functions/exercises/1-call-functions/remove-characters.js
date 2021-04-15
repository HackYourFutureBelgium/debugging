'use strict';

/* remove characters

  removes user-selected character from their input

*/

/* ===== declare functions ===== */

/**
 * returns a new string with all of the given characters removed
 * @param {*} text - some text with characters to remove
 * @param {*} toRemove - the characters to remove
 * @returns {string} text with all the given characters removed
 */
const removeCharacters = (text = '', toRemove = '') => {
  let newText = text;
  for (const character of toRemove) {
    newText = newText.replaceAll(character, '');
  }
  return newText;
};

console.assert(removeCharacters('asdf', 'fsda') === '', 'Test 1');
console.assert(removeCharacters('asdf', 'ASDF') === 'asdf', 'Test 2');
console.assert(removeCharacters('asdf', 'as') === 'df', 'Test 3');
console.assert(removeCharacters('asdf', 'df') === 'as', 'Test 4');
console.assert(removeCharacters('', 'asdf') === '', 'Test 5');
console.assert(removeCharacters('asdf', '') === 'asdf', 'Test 6');

/* ===== main program (use functions) ===== */

alert('enter some text, then decide what you want to remove from it');

let original = null;
while (original === null) {
  original = prompt('enter the text to modify');
}

let removeThese = null;
while (removeThese === null) {
  removeThese = prompt(`enter all the characters you would like to remove from:
- "${original}"`);
}

// use `removeCharacters` to create a new value assigned to `removified`

alert(`before: ${original}
after: ${removified}`);
