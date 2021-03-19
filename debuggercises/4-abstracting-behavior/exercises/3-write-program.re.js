'use strict';



// --- --- declare functions --- ---

// -- prompts --

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

// -- logic --

/**
 * repeats a string a given number of times
 * @param {string} text - the string to repeat
 * @param {number} repeats - how many times to repeat the string
 * @returns {string} the text repeated
 */
const repeatText = (text = '', repeats = 1) => {

  let repeatedText = '';
  for (let i = 0; i < repeats; i++) {
    repeatedText += text;
  }

  return repeatedText;
};

/**
 * repeats each character in a string, the default is 1 repetition
 * @param {string} text - the string with characters to repeat
 * @param {number} repetitions - how many times to repeat each character
 * @returns {string} the text with each character repeated
 */
const repeatCharacters = (text = '', repetitions = 1) => {
  let withRepeatedCharacters = '';

  /* iterate through each character in the user input */
  for (const character of text) {
    /* append each character multiple times to the new string */
    for (let i = 0; i < repetitions; i++) {
      withRepeatedCharacters += character;
    }
  }

  return withRepeatedCharacters;
};

// -- renders --

/**
 * renders a reader-friendly log of the program's execution
 * @param {string} input - the initial user input
 * @param {string} output - the final output
 * @param {boolean} textOrCharacters - was the text repeated or the characters?
 *  true: text, false: characters
 * @returns {string} a formatted string
 */
const renderProgramLog = (input = '', output = '', textOrCharacters = true) => {

  let programLog = 'before: "' + input + '"\n'
    + 'after: "' + output + '"\n\n';

  if (textOrCharacters) {
    programLog += '- repeated the whole text';
  } else {
    programLog += '- reversed each character';
  }

  return programLog;
};


// --- --- use the functions --- ---


// alert the user for the initial program data
const initialString = promptAndConfirmSomething('enter some text to repeatify:');

// prompt the user for extra options
const repeatWholeText = confirm(
  'would you like to repeat the whole text or each character?\n\n'
  + 'ok: whole text\n'
  + 'cancel: each character');

let repetitionsMessage = 'how many times would you like to repeat ';
if (repeatWholeText) {
  repetitionsMessage += 'the whole text';
} else {
  repetitionsMessage += 'each character';
}
const repetitions = numberPrompt(repetitionsMessage);

// carry out the core logic of your program
let finalString = '';

if (repeatWholeText) {
  finalString = repeatText(initialString, repetitions);
} else {
  finalString = repeatCharacters(initialString, repetitions);
}


// render & alert the final program output
const programLog = renderProgramLog(initialString, finalString, repeatWholeText);
alert(programLog);





