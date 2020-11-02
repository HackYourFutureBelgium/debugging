'use strict';

/* &&
  the and operator does not evaluate to true or false!
  it returns the left value or the right value
  - if the left is falsy, it returns the left value
  - if the left is truthy, it returns the right value
  https://javascript.info/logical-operators
*/

const and1 = 0 && 0;
console.log(1, typeof and1, and1);

const and2 = 1 && 0;
console.log(2, typeof and2, and2);

const and3 = 0 && 1;
console.log(3, typeof and3, and3);

const and4 = 1 && 1;
console.log(4, typeof and4, and4);

const and5 = '' && 'asdf';
console.log(5, typeof and5, and5);

const and6 = 'asdf' && '';
console.log(6, typeof and6, and6);

const and7 = true && false;
console.log(7, typeof and7, and7);

const and8 = NaN && undefined;
console.log(8, typeof and8, and8);

const and9 = 'poiu' && 'asdf';
console.log(9, typeof and9, and9);
