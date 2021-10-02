// #todo

'use strict';

const result1 = typeof typeof false === typeof typeof 'false';
console.log('result 1:', result1);

const result2 = typeof typeof 1 === typeof typeof null;
console.log('result 2:', result2);

const result3 = typeof typeof NaN === typeof typeof 14;
console.log('result 3:', result3);

const result4 = typeof typeof 1.4 === typeof typeof undefined;
console.log('result 4:', result4);

const result5 = typeof typeof 'string' === typeof typeof 'typeof';
console.log('result 5:', result5);
