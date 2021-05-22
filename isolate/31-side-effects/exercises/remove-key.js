'use strict';
console.log('-- begin --');

/**
 * removes a specific key from an object without modifying the original object
 *
 */
const removeKey = (obj = {}, key = '') => {};

const obj1 = { a: 1, b: 2 };
const obj2 = removeKey(obj1, 'a');
console.assert(obj1 !== obj2, '1. obj1 and obj2 are different objects');
console.assert(deepCompare(obj2, { b: 2 }), '2: obj2 does not have key "a"');
console.assert(deepCompare(obj1, { a: 1, b: 2 }), '3: obj1 was not modified');

const obj3 = { x: 1 };
const obj4 = removeKey(obj3, 'x');
console.assert(deepCompare(obj4, {}), '4: obj4 does not have key "x"');
console.assert(deepCompare(obj3, { x: 1 }), '5: obj3 was not modified');

const obj5 = { hel: 'lo' };
const obj6 = removeKey(obj5, 'bye');
console.assert(deepCompare(obj6, { hel: 'lo' }), '6: obj6 has key "hel"');
console.assert(deepCompare(obj5, { hel: 'lo' }), '7: obj5 was not modified');

// prettier-ignore
function deepCompare(actual, expect) { return ( actual === expect || Object.is(actual, expect) || (Object(actual) === actual && Object(expect) === expect && ((Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompare(actual[index], expect))) || (Object.keys(actual).length === Object.keys(expect).length && Object.keys(expect).every(key => deepCompare(actual[key], expect[key]))))));} // eslint-disable-line

console.log('-- end --');
