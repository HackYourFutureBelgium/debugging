// #todo

'use strict';

const result1 = !0 + +(false === 1);
console.log('result 1:', result1);

const result2 = !0 + +(false === 0);
console.log('result 2:', result2);

const result3 = !'0' + +('0' === 1);
console.log('result 3:', result3);

const result4 = !true + +(false === 1);
console.log('result 4:', result4);

const result5 = !'true' + +('' === true);
console.log('result 5:', result5);
