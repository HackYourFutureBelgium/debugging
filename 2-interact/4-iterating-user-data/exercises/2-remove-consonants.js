'use strict';

/*

  Remove all the consonants from user input

*/


let userInput = '';
let userConfirmed = _;
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

// there is more than one way to write this loop
//  try to find at least 3
for (_) {
  // build up inputWithoutConsonants by checking each character in the user input
  //  if the character is a vowel, add it to inputWithoutConsonants
}

const finalMessage = `"${userInput}" -> "${inputWithoutConsonants}"`;
alert(finalMessage);
