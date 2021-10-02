// #todo

'use strict';

const result1 = !null ? typeof null : 4 + '4';
console.log('result 1:', result1);

const result2 = !'null' ? typeof 'null' : 4 + '4';
console.log('result 2:', result2);

const result3 = !'null' ? typeof undefined : 4 + 4;
console.log('result 3:', result3);

const result4 = !44 ? typeof false : '4' + '4';
console.log('result 4:', result4);

const result5 = !0 ? typeof 'typeof' : true + null;
console.log('result 5:', result5);
