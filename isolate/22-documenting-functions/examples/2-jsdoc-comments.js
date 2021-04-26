'use strict';
console.log('-- begin --');

/* there is a conventional way to describe your functions with a comment

  to understand a function you need to know the key parts of a function
  1. BEHAVIOR: why does the function exist? what does the it do? what is it used for?
  2. PARAMETERS: what type should they be? what are they called? why are they needed?
  3. RETURN VALUE: what type will it be? what does it represent?

  VSCode has built-in support for writing these comments
  if you use default parameters, VSCode will automatically fill in the parameter types
  - https://code.visualstudio.com/Docs/languages/javascript#_jsdoc-support

  these are just comments! like this comment you're reading now
    the JS interpreter will ignore them completely
    they exist to help us humans
*/

/**
 * returns the type of any JS value
 * @param {any} value - the value to check
 * @returns {string} - the type of the parameter
 */
const findTheType = value => {
  return typeof value;
};

/**
 * adds two numbers together
 * @param {number} x
 * @param {number} y
 * @returns {number} the sum of x and y
 */
const add = (x = 0, y = 0) => {
  return x + y;
};

/**
 * compares the type and value of two parameters
 * @param {any} a
 * @param {any} b
 * @returns {boolean} result of the comparison
 */
const strictEqual = (a, b) => {
  return a === b;
};

/**
 * returns a new string with all of the letters reversed
 * @param {string} str - the string to be reversed
 * @returns {string} a new string, the parameter backwards
 */
const reverseString = (str = '') => {
  return str
    .split('')
    .reverse()
    .join('');
};


console.log('-- end --');