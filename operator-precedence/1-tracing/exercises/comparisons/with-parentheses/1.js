// #todo

'use strict';

const result1 = ('4' == '4') === ('4' === '4');
console.log('result 1:', result1);

const result2 = (4 == '4') === ('4' === '4');
console.log('result 2:', result2);

const result3 = (true == 1) === (1 === true);
console.log('result 3:', result3);

const result4 = (false == 'false') === (false === 'false');
console.log('result 4:', result4);

const result5 = ('1' == 'one') === ('1' === 'one');
console.log('result 5:', result5);
