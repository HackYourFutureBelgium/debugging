'use strict';

// refactor this code to use && instead of a conditional

const input = _;
const password = 'pickles';
console.log(input, password);

let isValidPassword = typeof input === 'string';
if (isValidPassword) {
  isValidPassword = input === password;
}
console.log(isValidPassword);
