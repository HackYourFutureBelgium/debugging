// PS. Study this in JS Tutor and the debugger

// 0: Creation Phase, function is declared
function flipper(param1, param2) {
  // 2 and 8: a return value is generated
  return param2 + param1;
  // 3 and 9: global result variable is declared & assigned
}

// 1: flipper is executed, creating a new frame
//    parameters are assigned values from 'a' & 'b'
const result1 = flipper('a', 'b');
// 4: the value of result1 is compared to the expected value
const isTrue1 = result1 === 'ba';

// 5: variable is declared & assigned
const arg1 = 'x';
// 6: variable is declared & assigned
const arg2 = 'y';

// 7: flipper is executed, creating a new frame
//    parameters are assigned values from arg1 & arg2
const result2 = flipper(arg1, arg2);

// 10: the value of result2 is compared to the expected value
const isTrue2 = result2 === 'yx';


// 11: isTrue1 is evaluated
console.assert(isTrue1, 'Assertion 1');
// 12: isTrue2 is evaluated
console.assert(isTrue2, 'Assertion 2');


