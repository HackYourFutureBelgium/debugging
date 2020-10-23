/* Back Tracking

  This is a technique where you step backwards through your code, it's useful for:
  - understanding how an unexpected result ocurred
  - determining variable roles
  - deepening your understanding of JS execution

  The best techniques for this are:
  1. Your brain, a pencil, some paper, and code comments
  2. JS Tutor
  3. Moving breakpoints back one line at a time and re-running your code

  Back tracing is ery helpful for determining variable roles and category.
  By moving backwards from the result it becomes more clear :
    how each variable was used to control the program flow
    how each variable contributed to the result's final value

*/


// 7: this step did not read or write from memory
'use strict';


/* 6: this step wrote to memory
  a variable named typeCheck was be declared
  a new function was declared and assigned to typeCheck

  this function was called on the last line to assign returnedValue
*/
const typeCheck = (parameter) => {

  /* 3: this step wrote to memory
    the local variable result was assigned a value
    the typeof parameter was evaluated using the parameter
      parameter: true
      --> "boolean"
    "boolean" boolean be assigned to the variable result

    this variable was used for the return value
  */
  const result = typeof parameter;

  /* 2: this step read & wrote to memory
    the return value is assigned to the outer scope variable returnedValue
      it is read from result, which was assigned in the previous step
  */
  return result;

};


/* 5: this step wrote to memory
  a variable named argument was be declared and assigned true

  arg was used on the last time when calling typeCheck
  this is the value that is used as input to find the final result
*/
const arg = true;


/* 4: this step read from memory (argument)
      a new frame in memory will be opened
      (on JS Tutor, a new box)
      (in VSCode or DevTools, a new entry on the callstack)

  call the function typeCheck passing
    the value from the variable arg will be passed as arugment
  the new local scope will have two variables
    parameter: ture
    result: undefined (it will get it's value later)
*/
const returnedValue = typeCheck(arg);

/* 1: the final step wrote to returnedValue
  it was assigned "boolean", the return value of typeCheck(arg)

  the final state of the program was:

  typeCheck: (parameter)=>{...}
  arg: true
  returnedValue: "boolean"
*/
