'use strict';



// --- --- declare functions --- ---

// -- prompts --

/**
 * a function that prompts the user for only letters
 * if the user enters nothing or cancels, it will prompt them again
 * if the input contains non-alphabet characters, it will prompt again
 * @param { string } message - what the user will read in the prompt
 * @returns { string } the user input, it will not be empty
 */
const promptAlphaNumeric = (message = 'enter only letters and white space:') => {
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

    const alphaNumericRegex = /^[A-Za-z\s]+$/;
    const isValidInput = alphaNumericRegex.test(userInput);
    console.log('isValidInput:', typeof isValidInput, isValidInput);
    if (!isValidInput) {
      alert('input contains non-letters, try again');
      continue;
    }

    userConfirmed = confirm(`is this correct: "${userInput}"`);
    console.log('userConfirmed:', typeof userConfirmed, userConfirmed);

  }

  return userInput;
};


// -- logic --

/**
* modifies a string so all vowels are uppercase
* any other characters are lower-cased
* @param {string} text - the text to modify
* @returns {string} the modifyed text
*/
const upperVowelsLowerConsonants = (text = '') => {
  const vowels = 'aeiouAEIOU';

  let modified = '';
  for (const character of text) {
    if (vowels.search(character) > -1) {
      modified += character.toUpperCase();
    } else {
      modified += character.toLowerCase();
    }
  }

  return modified;
};

// -- renders --

/**
 * renders the initial and final strings into a single message
 * @param {string} before - the initial input
 * @param {string} after - the modified input
 * @returns {string} a formatted string
 */
const renderBeforeAfter = (before = '', after = '') => {
  return 'before: "' + before + '"\n'
    + 'after: "' + after + '"';
};


// --- --- use the functions --- ---

// alert the instructions
const instructions = 'you will enter some text containing only letters and white space.\n'
  + '- all vowels will be set to upper case\n'
  + '- all consonants will be set to lower case';
alert(instructions);

// gather user input
const userInput = promptAlphaNumeric();

// pass the input through the logic
const modifiedInput = upperVowelsLowerConsonants(userInput);

// render and alert the results
const finalMessage = renderBeforeAfter(userInput, modifiedInput);
alert(finalMessage);
