// #todo

'use strict';

/* ||
  the or operator does not evaluate to true or false!
  it reads from left to right and evaluates to the first truthy value
  (if there is a truthy value)
  - if the left is truthy, it evaluates to the left value
  - if the left is falsy, it evaluates to the right value
*/

const or1 = 0 || 0;
console.log(typeof or1, or1);

const or2 = 1 || 0;
console.log(typeof or2, or2);

const or3 = 0 || 1;
console.log(typeof or3, or3);

const or4 = 1 || 1;
console.log(typeof or4, or4);

const or5 = '' || 'asdf';
console.log(typeof or5, or5);

const or6 = 'asdf' || '';
console.log(typeof or6, or6);

const or7 = true || false;
console.log(typeof or7, or7);

const or8 = NaN || undefined;
console.log(typeof or8, or8);

const or9 = 'poiu' || 'asdf';
console.log(typeof or9, or9);

console.log('-- end --');
