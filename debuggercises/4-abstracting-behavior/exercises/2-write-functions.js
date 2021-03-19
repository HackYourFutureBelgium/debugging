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

    // prompt the user for new input


    // make sure the user inputed something


    // make sure the input has only the allowed characters
    // (this works, no need to change it!)
    const alphaNumericRegex = /^[a-z\s]+$/i;
    const isValidInput = alphaNumericRegex.test(userInput);
    console.log('isValidInput:', typeof isValidInput, isValidInput);
    if (!isValidInput) {
      alert('input contains non-letters, try again');
      continue;
    }

    // allow the user to confirm their input

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
const upperVowelsLowerConsonants = () => {

};

// -- renders --

/**
 * renders the initial and final strings into a single message
 * @param {string} before - the initial input
 * @param {string} after - the modified input
 * @returns {string} a formatted string
 */
const renderBeforeAfter = () => {

};


// --- --- use the functions --- ---
//  below here, everything is correct!
//  write the functions to make this script work


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
