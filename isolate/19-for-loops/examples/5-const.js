'use strict';

/*
  using `const` in a for loop will throw an error after the first iteration
*/

for (const i = 0; i < 4; i++) {
  console.log(i); // 0, TypeError
}
