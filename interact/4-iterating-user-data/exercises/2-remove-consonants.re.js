'use strict';

/* for character of String

  iterating through each character in a string is so common
  that there's special syntax to make it easier

*/


let userInput = '';
let userConfirmed = false;
while (!userConfirmed) {

  userInput = prompt('enter a word, all consonants will be removed:');
  console.log('userInput:', typeof userInput, userInput);

  if (userInput === '' || userInput === null) {
    alert('nope, enter something');
    continue;
  }

  const confirmMessage = 'do you want to remove consonants from this word?\n\n'
    + '- "' + userInput + '"';
  userConfirmed = confirm(confirmMessage);

}


const vowels = 'aeiou';

let inputWithoutConsonants = '';

for (const character of userInput) {
  const lowerCaseCharacter = character.toLowerCase();
  if (vowels.search(lowerCaseCharacter) > -1) {
    inputWithoutConsonants += character;
  }
}

const finalMessage = `"${userInput}" -> "${inputWithoutConsonants}"`;
alert(finalMessage);
