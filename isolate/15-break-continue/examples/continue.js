'use strict';
console.log('-- begin --');

/* continue

  this statement can be used to skip ahead to the next loop iteration

  using continue inside of a conditional is very practical

*/

const max = 0;
// const max = 1;
// const max = 2;
// const max = 3;
// const max = 4;

let iterations = 0;
while (iterations < max) {
  console.log('begin loop');

  iterations = iterations + 1;

  if (iterations % 2 === 0) {
    console.log('continue to next iteration');
    continue;
  }

  console.log(iterations);

  console.log('end loop');
}

console.log('-- end --');
