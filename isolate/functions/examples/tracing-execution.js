// PS. Study this in JS Tutor and the debugger

// 0: Creation Phase, function is declared
function flipper(param1, param2) {
  // 2 and 9: a return value is generated
  return param2 + param1;
  // 3 and 10: global result variable is declared & assigned
}

// 1: flipper is executed, creating a new frame
//    parameters are assigned values using 'a' & 'b'
const result1 = flipper('a', 'b');
// 4: the value of result1 is compared to the expected value
const isTrue1 = result1 === 'ba';
// 5: the first assertion is evaluated
console.assert(isTrue1, 'Assertion 1');

// 6: variable is declared & assigned
const arg1 = 'x';
// 7: variable is declared & assigned
const arg2 = 'y';

// 8: flipper is executed, creating a new frame
//    parameters are assigned values from arg1 & arg2
const result2 = flipper(arg1, arg2);

// 11: the value of result2 is compared to the expected value
const isTrue2 = result2 === 'yx';
// 12: the second assertion is evaluated
console.assert(isTrue2, 'Assertion 2');


