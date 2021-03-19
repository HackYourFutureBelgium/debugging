'use strict';

/* Structured Programs

  Put it all together! There's more to programming than writing code that works
  your code should be readable & reusable.

  other developers should be able to know WHAT your code does
  without caring HOW it does it, this is why good practices are important
  - writing well-named functions makes your programs readable
  - documenting your functions helps others know how to use them
  - general-purpose functions with arguments can be reused in many programs

  You can also help others understand your code by
  - organizing your files
  - using comments to describe your file's structure

  Let's see this all in practice, things to notice in this file:

  - function declarations
    all the functions are declared at the top of the file
    functions are separated and commented based on their role in the program
    each function has a JSDoc comment to help you understand their behavior
  - using the functions
    the main program is a readable series of function calls
    control flow is used to decide the program's overall behavior

  This example is larger than what you're expected to write at this point
    but it's not more than you can understand!
    work your way from the big picture down to the details
  here's some suggested steps for reading and understanding this code
  1. use the program without looking at the code
    get the big picture of what it does and how it works
  2. read the part of the program where the functions are used
    piece together the logic of the program, without all the details
  3. collapse all the functions and read their documentation
    how does each function behave? arguments? return value?
    compare the documentation to how the functions are used at the bottom
  4. open the function bodies and understand how they work
    step through them in the debugger
    try different inputs to see how they behave

*/

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
 * repeats a string a given number of times
 * @param {string} text - the string to repeat
 * @param {number} repeats - how many times to repeat the string
 * @returns {string} the text repeated
 */
const repeat = (text = '', repeats = 0) => {
  let repeatedText = '';
  for (let i = 0; i < repeats; i++) {
    repeatedText += text;
  }

  return repeatedText;
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

// -- renders --

/**
 * renders a reader-friendly log of the program's execution
 * @param {string} input - the initial user input
 * @param {string} output - the final output
 * @param {boolean} repeatOrReverse - was the text repeated or reversed?
 *  true: repeated, false: reversed
 * @param {boolean} devowel - were the vowels removed?
 * @returns {string} a formatted string
 */
const renderProgramLog = (
  input = '',
  output = '',
  devoweled = false,
  repeatOrReverse = false
) => {
  let programLog = 'before: "' + input + '"\n' + 'after: "' + output + '"\n\n';

  if (devoweled) {
    programLog += '- removed all vowels\n';
  }

  if (repeatOrReverse) {
    programLog += '- repeated the string';
  } else {
    programLog += '- reversed the string';
  }

  return programLog;
};

// --- --- use the functions --- ---

// prompt the user for the initial program data
const initialString = promptAndConfirmSomething('enter some text to process:');

// prompt the user for extra options
const removeVowelsOption = confirm(
  'would you like to remove all vowels?\n\n' + 'ok: yes\n' + 'cancel: no'
);
const repeatOption = confirm(
  'would you like to repeat the string or reverse it?\n\n' +
    'ok: repeat\n' +
    'cancel: reverse'
);

// carry out the core logic of your program
let finalString = '';

if (removeVowelsOption) {
  const withoutVowels = removeVowels(initialString);
  finalString = withoutVowels;
} else {
  finalString = initialString;
}

if (repeatOption) {
  const repetitions = numberPrompt(
    'how many times would you like to repeat the text?'
  );
  const repeated = repeat(finalString, repetitions);
  finalString = repeated;
} else {
  const reversed = reverse(finalString);
  finalString = reversed;
}

// render & alert the final program output
const programLog = renderProgramLog(
  initialString,
  finalString,
  removeVowelsOption,
  repeatOption
);
alert(programLog);
