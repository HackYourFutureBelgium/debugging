// #todo

'use strict';

const result1 = 1 || (0 && 1);
console.log('result 1:', result1);

const result2 = ' ' || ('' && ' ');
console.log('result 2:', result2);

const result3 = 0 || ('' && 'hello');
console.log('result 3:', result3);

const result4 = false || (true && 'true');
console.log('result 4:', result4);

const result5 = 0 || (true && 0.5);
console.log('result 5:', result5);

const result6 = null || ('JavaScript!' && false);
console.log('result 6:', result6);
