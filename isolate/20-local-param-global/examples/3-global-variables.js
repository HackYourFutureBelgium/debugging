'use strict';

/*
  all variables used inside this function's body are declared globally
  when you update the variables inside the function, they also change globally!
  this can make your programs very hard to understand. best to avoid it
*/

const usesGlobals = () => {
  global1 = `${global1}-`;
  global2 = '-';
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
