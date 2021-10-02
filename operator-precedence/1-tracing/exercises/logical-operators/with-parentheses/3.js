// #todo

'use strict';

const result1 = (true || true) && (false || false);
console.log('result 1:', result1);

const result2 = ('false' || false) && (0 || 1);
console.log('result 2:', result2);

const result3 = (false || 0) && ('false' || 'true');
console.log('result 3:', result3);

const result4 = (12 || 13) && (false || ':)');
console.log('result 4:', result4);

const result5 = ('Java' || 'Script') && ('!' || '?');
console.log('result 5:', result5);

const result6 = (0 || '') && (false || null);
console.log('result 6:', result6);
