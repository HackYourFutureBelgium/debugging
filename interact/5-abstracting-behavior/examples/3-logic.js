'use strict';

/* Logic

  Another important role is to process and transform data.
  we'll call these functions "logic".
  these are the traditional "coding challenge"/algorithm functions

  Here are some general rules for your logic functions:
  - they always need at least one argument
  - they will always return a value
  - they only use console.log
  - they cannot use prompt, alert, or confirm

  and some examples:

*/


// --- --- declare functions --- ---


// -- prompt functions --

/**
 * a function that prompts the user to enter something
 * if the user enters nothing or cancels, it will prompt them again
 * @param {string} message - what the user will read in the prompt
 * @returns {string} the user input, it will not be empty
 */
const promptAndConfirmSomething = (message = 'enter something:') => {
  console.log('---', message, '---');

  let userInput = '';
  let userConfirmed = false;
  while (!userConfirmed) {

    userInput = prompt(message);
    console.log('userInput:', typeof userInput, userInput);

    if (userInput === null || userInput === '') {
      alert('nope, gotta enter something.');
      continue;
    }

    userConfirmed = confirm(`is this correct: "${userInput}"`);
    console.log('userConfirmed:', typeof userConfirmed, userConfirmed);

  }

  return userInput;
};

// -- logic functions --

/**
 * reverses a string
 * @param {string} text - the string to reverse
 * @returns {string} the reversed argument
 */
const reverse = (text = '') => {
  let reversedText = '';

  for (let index = text.length - 1; index > -1; index--) {
    const nextCharacter = text[index];
    reversedText = reversedText + nextCharacter;
  }

  return reversedText;
};

/**
 * removes all the vowels from a string
 * @param {string} text - the text to filter
 * @returns {string} a new string with no vowels
 */
const removeVowels = (text = '') => {
  const vowels = 'AEIOUaeiou';

  let devoweled = '';
  for (const character of text) {
    if (vowels.search(character) === -1) {
      devoweled = devoweled + character;
    }
  }

  return devoweled;
};


// --- --- use the functions --- ---


const inputToProcess = promptAndConfirmSomething('enter some text. it will be reversed and the vowels will be removed');

const reversedInput = reverse(inputToProcess);
const withoutVowels = removeVowels(reversedInput);

const finalMessage = 'before:\n'
  + '- "' + inputToProcess + '"\n\n'
  + 'after:\n'
  + '- "' + withoutVowels + '"\n\n';
alert(finalMessage);




