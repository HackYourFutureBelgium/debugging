/* 1: use strict
  to help us avoid making easy mistakes
*/
'use strict';

/* 2: declare the typeCheck function
  i'll use this function later on to check the type of different values
*/
const typeCheck = (parameter) => {

  /* 5, 11: declare & assign local result variable
    storing the result of typeof for later
    this is the value typeCheck will return
  */
  const result = typeof parameter;

  /* 6, 12: return result
    to make the value of result available outside this function's scope
  */
  return result;
};


/* 3: declare and assign arg1
  i'll check the value of this variable
*/
const arg1 = true;

/* 4: call typeCheck with arg1
  checking the type of arg1, later i will assert the value
*/
/* 7: declare arg1Type and assign return value
  capturing the return value in the outer scope for later use
*/
const arg1Type = typeCheck(arg1);

/* 8: assert the value of arg1Type
  to make sure i understood how the program worked
*/
console.assert(arg1Type === 'boolean', 'arg1Type should store "boolean"');



/* 9: declare and assign arg2
  i'll check the value of this variable
*/
const arg2 = 'true';

/* 10: call typeCheck with arg2
  checking the type of arg2, later i will assert the value
*/
/* 13: declare arg2Type and assign return value
  capturing the return value in the outer scope for later use
*/
const arg2Type = typeCheck(arg2);

/* 14: assert the value of arg2Type
  to make sure i understood how the program worked
*/
console.assert(arg2Type === 'string', 'arg2Type should store "string"');
