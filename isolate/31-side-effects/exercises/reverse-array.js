'use strict';
console.log('-- begin --');

/**
 * reverses an array without modifying the parameter
 *
 */
const reverseArray = (arr = [], index = 0) => {};

const arr1 = [1, 2, 3];
const arr2 = reverseArray(arr1, 'a');
console.assert(arr1 !== arr2, '1');
console.assert(deepCompare(arr2, [3, 2, 1]), '2');
console.assert(deepCompare(arr1, [1, 2, 3]), '3: arr1 was not modified');

const arr3 = ['a', 'b', 'c'];
const arr4 = reverseArray(arr3, 'x');
console.assert(arr3 !== arr4, '4');
console.assert(deepCompare(arr4, ['c', 'b', 'a']), '5');
console.assert(deepCompare(arr3, ['a', 'b', 'c']), '6: arr3 was not modified');

// prettier-ignore
function deepCompare(actual, expect) { return ( actual === expect || Object.is(actual, expect) || (Object(actual) === actual && Object(expect) === expect && ((Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompare(actual[index], expect))) || (Object.keys(actual).length === Object.keys(expect).length && Object.keys(expect).every(key => deepCompare(actual[key], expect[key]))))));} // eslint-disable-line

console.log('-- end --');
