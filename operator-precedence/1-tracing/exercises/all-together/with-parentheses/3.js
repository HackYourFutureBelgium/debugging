// #todo

'use strict';

const result1 = 4 !== ('4' && !'4');
console.log('result 1:', result1);

const result2 = true !== ('0' && !0);
console.log('result 2:', result2);

const result3 = 12 !== (0 && !0.12);
console.log('result 3:', result3);

const result4 = 'True' !== (true && !'true');
console.log('result 4:', result4);

const result5 = false !== (undefined && !null);
console.log('result 5:', result5);
