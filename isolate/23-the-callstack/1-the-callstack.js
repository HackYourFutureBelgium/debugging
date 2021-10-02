'use strict';
console.log('-- begin --');

/* the callstack happens when you call a function from inside a function call
  this is much easier to visualize than to describe, so ... JS Tutor!
*/
let depth = 0;

const func1 = () => {
  console.log('entering func 1');
  depth++;
  console.log(depth);
  depth--;
  console.log('leaving func 1');
};

console.log('this callstack is 1 call deep');
func1();

const func2 = () => {
  console.log('entering func 2');
  depth++;
  func1();
  depth--;
  console.log('leaving func 2');
};

// it's backwards from what you might expect
//  2 will open first, but 1 will close first
console.log('this callstack is 2 calls deep');
func2();

const func3 = () => {
  console.log('entering func 3');
  depth++;
  func2();
  depth--;
  console.log('leaving func 3');
};

console.log('this callstack is 3 calls deep');
func3();

console.log('-- end --');
