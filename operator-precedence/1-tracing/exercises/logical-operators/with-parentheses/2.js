// #todo

'use strict';

const result1 = (false || true) && 1;
console.log('result 1:', result1);

const result2 = (true || false) && 'one';
console.log('result 2:', result2);

const result3 = (false || 0) && '?';
console.log('result 3:', result3);

const result4 = (1 || 2) && 3;
console.log('result 4:', result4);

const result5 = ('' || '...') && '!';
console.log('result 5:', result5);

const result6 = ('' || 0) && false;
console.log('result 6:', result6);
