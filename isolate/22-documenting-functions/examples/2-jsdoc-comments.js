'use strict';
console.log('-- begin --');

/* there is a conventional way to describe your functions with a comment

  to understand a function you need to know the key parts of a function
  1. BEHAVIOR: why does the function exist? what does the it do? what is it used for?
  2. PARAMETERS: what type should they be? is there a default? what are they called? why are they needed?
    - https://jsdoc.app/tags-param.html
    - https://jsdoc.app/tags-param.html#optional-parameters-and-default-values
  3. RETURN VALUE: what type will it be? what does it represent?
    - https://jsdoc.app/tags-returns.html

  references:
  - https://devhints.io/jsdoc
  - https://gist.github.com/customcommander/5206dcb44670e34f6923b62c1781e1d2
  - https://jsdoc.app/

  VSCode has built-in support for writing these comments
  if you use default parameters, VSCode will automatically fill in the parameter types
  - https://code.visualstudio.com/Docs/languages/javascript#_jsdoc-support

  these are just comments! like this comment you're reading now
    the JS interpreter will ignore them completely
    they exist to help us humans
*/

/**
 * Returns the type of any JS value.
 *
 * @param {any} value - The value to check.
 * @returns {string} - The type of the parameter.
 */
const findTheType = value => {
  return typeof value;
};

/**
 * Adds two numbers together.
 *
 * @param {number} [x=0] - The left operand.
 * @param {number} [y=0] - The right operand.
 * @returns {number} The sum of x and y.
 */
const add = (x = 0, y = 0) => {
  return x + y;
};

/**
 * Compares the type and value of two parameters.
 *
 * @param {any} a
 * @param {any} b
 * @returns {boolean} Tesult of the comparison.
 */
const strictEqual = (a, b) => {
  return a === b;
};

/**
 * Returns a new string with all of the letters reversed.
 *
 * @param {string} [str=''] - The string to be reversed.
 * @returns {string} A new string, the parameter backwards.
 */
const reverseString = (str = '') => {
  return str
    .split('')
    .reverse()
    .join('');
};

console.log('-- end --');
