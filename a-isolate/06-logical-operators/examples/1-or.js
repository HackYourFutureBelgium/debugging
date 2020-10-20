'use strict';

/* ||
  the or operator does not evaluate to true or false!
  it returns the left value or the right value
  - if the left is truthy, it returns the left value
  - if the left is falsy, it returns the right value
*/

const or1 = 0 || 0;
console.log(1, typeof or1, or1);

const or2 = 1 || 0;
console.log(2, typeof or2, or2);

const or3 = 0 || 1;
console.log(3, typeof or3, or3);

const or4 = 1 || 1;
console.log(4, typeof or4, or4);

const or5 = '' || 'asdf';
console.log(5, typeof or5, or5);

const or6 = 'asdf' || '';
console.log(6, typeof or6, or6);

const or7 = true || false;
console.log(7, typeof or7, or7);

const or8 = NaN || undefined;
console.log(8, typeof or8, or8);

const or9 = 'poiu' || 'asdf';
console.log(9, typeof or9, or9);
