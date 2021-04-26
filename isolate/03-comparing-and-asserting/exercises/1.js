'use strict';
console.log('-- begin --');

// replace the _'s to pass the tests

const test1 = true === _;
console.log(typeof test1, test1);
console.assert(test1, 'Test 1');

const test2 = 0.0 === _;
console.log(typeof test2, test2);
console.assert(test2, 'Test 2');

const test3 = false === _;
console.log(typeof test3, test3);
console.assert(test3, 'Test 3');

const test4 = 'null' === _;
console.log(typeof test4, test4);
console.assert(test4, 'Test 4');


console.log('-- end --');