// #todo

'use strict';

/* reverse text or words

  reverse either the whole text, or each word individually

*/

/* ===== declare functions ===== */

/**
 *
 */
const _ = () => {};

// test your function
console.assert(_('') === '', 'Test 1');
console.assert(_('123') === '321', 'Test 2');
console.assert(_('(-*-)') === ')-*-(', 'Test 3');
console.assert(_(' yo!') === '!oy ', 'Test 4');
console.assert(_('wizard') === 'draziw', 'Test 5');

/* ===== main program (use functions) ===== */

alert(
  'enter some text, then decide if you want to reverse the whole thing or each word',
);

let original = null;
while (original === null) {
  original = prompt('enter the text to reverse');
}

const reverseWords = confirm(`what do you want to remove?

- each word: "ok"
- whole thing: "cancel"`);

let reversed = '';
if (reverseWords) {
  const splitText = original.split(' ');
  const newWords = [];
  for (const word of splitText) {
    // BEGIN: refactor logic into a function call
    let reversedWord = '';
    for (let i = 0; i < word.length; i++) {
      reversedWord = word[i] + reversedWord;
    }
    // END: refactor
    newWords.push(reversedWord); // use the return value
  }
  reversed = newWords.join(' ');
} else {
  // BEGIN: refactor this logic into a function call
  let reversedText = '';
  for (let i = 0; i < original.length; i++) {
    reversedText = original[i] + reversedText;
  }
  // END: refactor
  reversed = reversedText; // use the return value
}

alert(`before: ${original}
after: ${reversed}`);
