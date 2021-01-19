'use strict';

/*
  arrange the code to pass the assertion
*/


let type = '';

if (typeof 5 === 'number') {
  type = 'number';
}

console.assert(type === 'number', 'the variable should store "number"')




if (typeof 5 === Number) { // distractor

  const type = ''; // distractor

  type === 'number'; // distractor
