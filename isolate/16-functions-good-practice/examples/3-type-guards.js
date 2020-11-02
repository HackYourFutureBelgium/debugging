'use strict';

/* Type Guards

  default parameters and documentation can help others understand your code
  but they don't ensure that other use it correctly

  you can throw an error if the arguments are not the right type
  this will help avoid avoidable bugs by stopping your code when types are not correct

*/


/**
 * returns the type of any JS value
 * @param {any} value - the value to check
 * @returns {string} - the type of the parameter
 */
const findTheType = (value) => {
  // any type, no need for a guard!

  return typeof value;
};

/**
 * adds two numbers together
 * @param {number} x
 * @param {number} y
 * @returns {number} the sum of x and y
 */
const add = (x = 0, y = 0) => {
  if (typeof x !== 'number') {
    throw new TypeError('x is not a number');
  }
  if (typeof y !== 'number') {
    throw new TypeError('y is not a number');
  }

  return x + y
};

/**
 * compares the type and value of two parameters
 * @param {any} a
 * @param {any} b
 * @returns {boolean} result of the comparison
 */
const strictEqual = (a, b) => {
  // any type, no need for a guard!

  return a === b;
};

/**
 * returns a new string with all of the letters reversed
 * @param {string} str - the string to be reversed
 * @returns {string} a new string, the parameter backwards
 */
const reverseString = (str = '') => {
  if (typeof str !== 'string') {
    throw new TypeError('str is not a string');
  }

  return str.split('').reverse().join('');
};
