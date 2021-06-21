'use strict';

/* remove or repeat

  a program that processes text by either:

  - repeating each character
  - removing everything that is not a letter or a space

*/

/* ===== declare functions ===== */

/**
 * Returns a new string with only the given characters left in it.
 *
 * @param {_} [_=_] - Some text to remove characters from.
 * @param {_} [_=_] - The characters to keep.
 * @returns {_} Text with only the given characters still in it.
 */
const keepCharacters = () => {};

console.assert(keepCharacters('asdf', 'fsda') === 'asdf', 'Test 1: keep');
console.assert(keepCharacters('asdf', 'ASDF') === '', 'Test 2: keep');
console.assert(keepCharacters('asdf', 'as') === 'as', 'Test 3: keep');
console.assert(keepCharacters('asdf', 'df') === 'df', 'Test 4: keep');
console.assert(keepCharacters('', 'asdf') === '', 'Test 5: keep');
console.assert(keepCharacters('asdf', '') === '', 'Test 6: keep');

/**
 * Returns a new string like the original one but with each character repeated.
 *
 * @param {_} [_=_] - A string to repeat each character.
 * @param {_} [_=_] - How many times to repeat each character.
 * @returns {_} The original text with each character repeated.
 */
const repeatCharacters = () => {};

console.assert(repeatCharacters('asdf', 0) === '', 'Test 1: repeat');
console.assert(repeatCharacters('asdf', 1) === 'asdf', 'Test 2: repeat');
console.assert(repeatCharacters('asdf', 2) === 'aassddff', 'Test 3: repeat');
console.assert(
  repeatCharacters('asdf', 3) === 'aaasssdddfff',
  'Test 4: repeat'
);

/* ===== main program (use functions) ===== */

alert(`enter some text, then decide if you want to either:

- repeat each character
- remove everything that's not a letter or space`);

let original = null;
while (original === null) {
  original = prompt('enter some text');
}

const remove = confirm(`would you like to:

- remove extra things: "ok"
- repeat each character: "cancel"`);

let newThing = '';
if (remove) {
  const lettersAndSpaces =
    'abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  newThing = keepCharacters(original, lettersAndSpaces);
} else {
  newThing = repeatCharacters(original, 2);
}

alert(`before: ${original}
after: ${newThing}`);
