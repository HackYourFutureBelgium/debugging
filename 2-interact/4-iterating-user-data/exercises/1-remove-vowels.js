'use strict';

/*

  remove all the vowels from user input

*/


let userInput = '';
let userConfirmed = false;
while (_) {

  userInput = prompt('enter a word, all vowels will be removed:');
  console.log('userInput:', typeof userInput, userInput);

  if (_) {
    alert('nope, enter something');
    continue;
  }

  const confirmMessage = 'do you want to remove vowels from this word?\n\n'
    + '- "' + userInput + '"';
  userConfirmed = confirm(confirmMessage);

}


const vowels = 'aeiou';

let inputWithoutVowels = '';

// there is more than one way to write this loop
//  try to find at least 3
for (_) {
  // build up inputWithoutVowels by checking each character in the user input
  //  if the character is a consonant, add it to inputWithoutVowels
}

const finalMessage = `"${userInput}" -> "${inputWithoutVowels}"`;
alert(finalMessage);
