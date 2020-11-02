'use strict';

/* Using Functions

  Functions allow you to write code once and use it many times with different values

  calling a function is much easier to read and understand than 20 lines of a while loop
    (if it's well-named ;)

  This final chapter of Interact will cover:
  - how functions work in a program
  - best practices for writing functions
  - different roles a function can play in your program

  Here's a first example to get you started, pay attention to:
  - this program is broken into two sections
    - the first section has a function declaration. all the messy code is up here
    - the second section uses the function declaration. this is simple and readable
  - JSDoc string
    - a specialized way to write comments that describe functions
    - still just a comment!  JavaScript will ignore it
    - it's written for other developers
  - default parameter
    - if the developer passes no arguments, this will be the message
    - it gives a hint to the developer that they should pass a string
    - this will not prevent developers from passing the wrong type.

*/


// --- --- declare functions --- ---

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



// --- --- use the functions --- ---

const instructions = 'input all of your personal information, we need it\n\n'
  + '- name\n'
  + '- nationality';
alert(instructions);

const name = promptAndConfirmSomething('enter your name:');
const nationality = promptAndConfirmSomething('enter your nationality:');

const finalMessage = `You are ${name}, from ${nationality}`;
alert(finalMessage);



