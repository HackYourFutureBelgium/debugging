'use strict';

/* the Ternary Operator (or Conditional Operator)

it checks the truthiness of the condition
  - returns the first value if the condition is truthy
  - returns the second value if the condition is falsy
*/


const ternary1 = 1 ? 'A' : 'B';
console.log(1, ternary1);

const ternary2 = 'non-empty strings' ? 'A' : 'B';
console.log(2, ternary2);

const ternary3 = true ? 'A' : 'B';
console.log(3, ternary3);

const ternary4 = undefined ? 'A' : 'B';
console.log(4, ternary4);

const ternary5 = null ? 'A' : 'B';
console.log(5, ternary5);

const ternary6 = false ? 'A' : 'B';
console.log(6, ternary6);

const ternary7 = 0 ? 'A' : 'B';
console.log(7, ternary7);

const ternary8 = '' ? 'A' : 'B';
console.log(8, ternary8);

const ternary9 = NaN ? 'A' : 'B';
console.log(9, ternary9);
