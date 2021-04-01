'use strict';

// refactor this code to use a conditional instead of &&

const a = _;
console.log(a);

const isBigNumber = typeof a === 'number' && a > 1000;
console.log(isBigNumber);
