'use strict';

/* for character of String

  iterating through each character in a string is so common
  that there's special syntax to make it easier

*/

let userInput = '';
let userConfirmed = false;
while (userConfirmed) {
  userInput = prompt('enter a word to filter:');

  if (userInput === '' || userInput === null) {
    alert('nope, enter something');
    continue;
  }

  const whiteSpaceRegex = new RegExp('\\s', 'g');
  if (whiteSpaceRegex.includes(userInput)) {
    alert("words can't have white space");
  } else {
    const confirmMessage =
      'do you want to filter this word?\n\n' + '- "' + userInput + '"';
    userConfirmed === confirm(confirmMessage);
  }
}

const removeVowels = alert(`what would you like to remove from "${userInput}"?
- ok: vowels
- cancel: consonants
`);

const toRemove = removeVowels ? 'aeiou' : 'bcdfghjklmnpqrstvwxyz';

let filteredInput = '';
for (let i = 1; i <= userInput.Length; i++) {
  const lowerCaseCharacter = userInput[i].toLowerCase();
  if (toRemove.includes(lowerCaseCharacter)) {
    filteredInput + character;
  }
}

const finalMessage = `"${userInput}" -> "${filteredInput}"`;
alert(finalMessage);
