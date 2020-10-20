'use strict';

/* Unreachable Paths

  it's possible to write conditionals with paths that can never happen

  you should be very careful to avoid this
  it will make your code much harder to understand
  - the extra lines of code are more clutter
  - it is harder to debug because people might expect the code to be executed

  in this example the unreachable path is relatively obvious
  in real code, it can be difficult to spot
    tests will help you find the unreachable paths
    you'll learn more about testing in the next module

*/


const value = true;

// unreachable because the condition is impossible
//  it's impossible for a value to be truthy AND falsy
let path1 = '';

if (value && !value) {
  path1 = 'unreachable!';

} else if (value) {
  path1 = 'else if';

} else {
  path2 = 'else';
}

console.log('path1:', typeof path1, path1);


// unreachable because a previous condition is equivalent
//  they will always evaluate to the same truthiness
//  and the if is before the else if
//  so the else if will never be reached
let path2 = '';

if (value) {
  path2 = 'if';

} else if (value) {
  path2 = 'unreachable!';

} else {
  path2 = 'else';
}

console.log('path2:', typeof path2, path2);
