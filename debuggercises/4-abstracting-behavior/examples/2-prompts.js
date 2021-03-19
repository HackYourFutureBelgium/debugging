'use strict';

/* Prompts

  One role a function can play in your program is to gather and validate user input
  we'll call these functions "prompts".

  Here are some general rules for your prompt functions:
  - they don't always need an argument
  - they will always return a value
  - they must use at least one prompt() or confirm()
  - they can also use alert & console.log

  and some examples:

*/


// --- --- declare functions --- ---

// -- prompt functions --

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


/**
 * prompts the user for an email address and validates the input
 * it will continuously prompt the user until a valid email is entered
 * @param {string} message - the message to show users
 * @returns {string} a valid email address
 */
const emailPrompt = (message = 'enter an email address:') => {
  console.log('---', message, '---');

  let emailAddress = '';
  while (true) {

    const userInput = prompt(message);
    console.log('userInput:', typeof userInput, userInput);

    if (userInput === null || userInput === '') {
      alert('enter something, please');
      continue;
    }

    // you aren't expected to write this yourself
    // to learn how it works:
    //  https://stackoverflow.com/a/9204568
    //  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
    const emailRegex = /\S+@\S+\.\S+/;
    const isValidEmail = emailRegex.test(userInput);
    if (!isValidEmail) {
      alert('not a valid email address:\n\n- ' + userInput);
      continue;
    }

    const confirmMessage = 'is this correct?\n"' + userInput + '"';
    const userDidConfirm = confirm(confirmMessage);
    console.log('userDidConfirm:', typeof userDidConfirm, userDidConfirm);

    if (userDidConfirm) {
      emailAddress = userInput;
      break;
    }
  }

  return emailAddress;
};


// --- --- use the functions --- ---


const userEmailAddress = emailPrompt();
const bossEmailAddress = emailPrompt("enter your boss's email address:");

const userTelephone = numberPrompt('enter your telephone number:');
const bossTelephone = numberPrompt("enter your boss's telephone number:");

const finalMessage = 'you:\n'
  + '- ' + userEmailAddress + '\n'
  + '- ' + userTelephone + '\n\n'
  + 'your boss:\n'
  + '- ' + bossEmailAddress + '\n'
  + '- ' + bossTelephone + '\n';
alert(finalMessage);




