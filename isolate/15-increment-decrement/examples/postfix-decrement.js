'use strict';

console.log('postfix decrement: x--')

/* two things happen when you use x-- (in this order!)
  a. return the value stored by x
  b. reassign x to it's current value minus 1
*/

let x = 0;
console.log('initial x:', typeof x, x, '\n');

const _1_return = x--;
const _1_new_x = x;
console.log('1. return:', typeof _1_return, _1_return);
console.log('1. new x:', typeof _1_new_x, _1_new_x, '\n');

const _2_return = x--;
const _2_new_x = x;
console.log('2. return:', typeof _2_return, _2_return);
console.log('2. new x:', typeof _2_new_x, _2_new_x, '\n');

const _3_return = x--;
const _3_new_x = x;
console.log('3. return:', typeof _3_return, _3_return);
console.log('3. new x:', typeof _3_new_x, _3_new_x, '\n');

const _4_return = x--;
const _4_new_x = x;
console.log('4. return:', typeof _4_return, _4_return);
console.log('4. new x:', typeof _4_new_x, _4_new_x, '\n');

