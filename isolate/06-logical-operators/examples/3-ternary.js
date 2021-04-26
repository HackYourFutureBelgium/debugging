'use strict';
console.log('-- begin --');

/* the Ternary Operator (or Conditional Operator)

it checks the truthiness of the condition
  - returns the first value if the condition is truthy
  - returns the second value if the condition is falsy
*/

const ternary1 = 1 ? 'A' : 'B';
console.log(ternary1);

const ternary2 = 'non-empty strings' ? 'A' : 'B';
console.log(ternary2);

const ternary3 = true ? 'A' : 'B';
console.log(ternary3);

const ternary4 = undefined ? 'A' : 'B';
console.log(ternary4);

const ternary5 = null ? 'A' : 'B';
console.log(ternary5);

const ternary6 = false ? 'A' : 'B';
console.log(ternary6);

const ternary7 = 0 ? 'A' : 'B';
console.log(ternary7);

const ternary8 = '' ? 'A' : 'B';
console.log(ternary8);

const ternary9 = NaN ? 'A' : 'B';
console.log(ternary9);


console.log('-- end --');