'use strict';

/* to understand function scope, you need to ask one simple question:

  - How did this variable get it's value?

  At this stage in your programming life there are 3 answers to this question

  PARAMETER: the variable got it's value as an argument when the function was called
  LOCAL: the variable was declared and assigned within the function body
  GLOBAL: the variable is not a parameter and was not declared locally
    - it's value comes from a variable declared outside of the function body
    - (avoid ever using global scope after these exercises :)

*/

console.log('\n-- Parameters ---');
//  all variables used inside this function's body are declared as parameters
//  the variables get their value from arguments when the function is called

const usesParameters = (param1, param2) => {
  return `${param1}, ${param2}`;
};

const fromParams1 = usesParameters('hi', 'bye');
console.log('fromParams1:', fromParams1);

const fromParams2 = usesParameters('a', 'b');
console.log('fromParams2:', fromParams2);


console.log('\n-- Local Variables ---');
//  all variables used inside this function's body are declared locally
//  the variables get their value from a local assignmnet

const usesLocals = () => {
  const local1 = 'town';
  const local2 = 'ship';
  return `${local1}, ${local2}`;
};

const fromLocals1 = usesLocals();
console.log('fromLocals1:', fromLocals1);

const fromLocals2 = usesLocals();
console.log('fromLocals2:', fromLocals2);


console.log('\n-- Global Variables ---');
//  all variables used inside this function's body are declared globally
//  the variables get their value from local and global assignments (confusing!)

const usesGlobals = () => {
  global1 = `${global1}-`;
  global2 = '-'
  return `${global1}, ${global2}`;
};

let global1 = 'a';
let global2 = 'b';

const fromGlobals1 = usesGlobals();
console.log('fromGlobals1:', fromGlobals1);
console.log('global1:', global1);
console.log('global2:', global2, '\n');

global1 = '|';
global2 = `${global2}|`;

console.log('global1:', global1);
console.log('global2:', global2, '\n');

const fromGlobals2 = usesGlobals();
console.log('fromGlobals2:', fromGlobals2);
console.log('global1:', global1);
console.log('global2:', global2, '\n');


global1 = `${global1}|`;
global2 = `${global2}|`;

console.log('global1:', global1);
console.log('global2:', global2);
