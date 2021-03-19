'use strict';

/* Renders

  The final role you will learn in this chapter is a "render"
  render functions format data so it's easier for users to understand

  Here are some general rules for your render functions:
  - they always need at least one argument (you need some data to display!)
  - they will return a formatted version of your data
  - they can only use console.log
  - they cannot use prompt, alert or confirm (you will alert the return value)

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

/**
 * prompts the user for a number, casts and validates their input
 * it will prompt the user until a valid number is entered
 * @param {string} message - the text displayed to the user
 * @returns {number} a number cast from the user input (never NaN)
 */
const numberPrompt = (message = 'enter a number:') => {
  console.log('---', message, '---');

  let userNumber = NaN;
  let userConfirmed = false;
  while (!userConfirmed) {

    const userInput = prompt(message);
    console.log('userInput:', typeof userInput, userInput);

    if (userInput === '' || userInput === null) {
      alert('nope, enter something');
      continue;
    }

    userNumber = Number(userInput);
    console.log('userNumber:', typeof userNumber, userNumber);

    if (Number.isNaN(userNumber)) {
      alert('"' + userInput + '" is not a number');
      continue;
    }

    const confirmMessage = 'is this correct?\n\n' + userInput;
    userConfirmed = confirm(confirmMessage);
    console.log('userConfirmed:', typeof userConfirmed, userConfirmed);

  }

  return userNumber;
};


// -- render functions --


/**
 * renders user data into a formatted string
 * if any data is empty or not the correct type, it will not be rendered
 * @param {string} name - the user's name
 * @param {string} nationality - the user's nationality
 * @param {number} age - their height in cm
 * @param {number} height - their age in days
 * @returns {string} a formatted string to display their data
 */
const renderPersonalData = (name = '', nationality = '', age = 0, height = 0) => {
  // this function demonstrates conditional rendering
  //  displaying data differently depending on some condition

  let userString = '';

  if (name !== '') {
    userString += 'name: ' + name + '\n';
  }
  if (nationality !== '') {
    userString += 'nationality: ' + nationality + '\n';
  }
  if (age > -1) {
    userString += 'age: ' + age + ' years old\n';
  }
  if (height > 0) {
    userString += 'height: ' + height + ' cm\n';
  }

  return userString;
};


// --- --- use the functions --- ---


const userName = promptAndConfirmSomething('enter your name:');
const userNationality = promptAndConfirmSomething('enter your nationality:');
const userHeight = numberPrompt('enter your height (in cm):');
const userAge = numberPrompt('enter your age (in days):');

const userProfile = renderPersonalData(userName, userNationality, userHeight, userAge);
alert(userProfile);



