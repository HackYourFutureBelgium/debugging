// #todo

'use strict';

/* for character of String

  iterating through each character in a string is so common
  that there's special syntax to make it easier

*/

let userInput = '';
let userConfirmed = false;
while (_) {
  userInput = prompt('enter a word to filter:');

  if (userInput === '' || userInput === null) {
    alert('nope, enter something');
    continue;
  }

  const whiteSpaceRegex = new RegExp('\\s', 'g');
  if (whiteSpaceRegex._(userInput)) {
    alert("words can't have white space");
    continue;
  }

  const confirmMessage =
    'do you want to filter this word?\n\n' + '- "' + userInput + '"';
  _ = confirm(confirmMessage);
}

const removeVowels = confirm(`what would you like to remove from "${_}"?
- ok: vowels
- cancel: consonants
`);

const toRemove = removeVowels ? '_' : '_';

let filteredInput = '';
for (const character of userInput) {
  const lowerCaseCharacter = character.toLowerCase();
  if (_) {
    _;
  }
}

const finalMessage = `"${userInput}" -> "${filteredInput}"`;
alert(finalMessage);
