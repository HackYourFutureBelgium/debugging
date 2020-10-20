'use strict';

/**
 * reproduces the behavior of (a + b) for primitive types
 * @param {any} a - the left operand
 * @param {any} b - the right operand
 * @returns {(string|number)}
 */
const plus = (a, b) => {
  let result;

  if (typeof a === "string" || typeof b === "string") {
    const aStr = String(a);
    const bStr = String(b);
    result = aStr + bStr;

  } else {
    const aNum = Number(a);
    const bNum = Number(b);
    result = aNum + bNum;

  }

  if (typeof result !== 'string' && typeof result !== 'number') { throw new TypeError(); }
  return result;
};

const _01_a = 1;
const _01_b = 2;
const _01_native = _01_a + _01_b;
const _01_copy = plus(_01_a, _01_b);
console.assert(_01_copy === _01_native, 'Test 1');

const _02_a = '1';
const _02_b = 2;
const _02_native = _02_a + _02_b;
const _02_copy = plus(_02_a, _02_b);
console.assert(_02_copy === _02_native, 'Test 2');

const _03_a = '1';
const _03_b = '2';
const _03_native = _03_a + _03_b;
const _03_copy = plus(_03_a, _03_b);
console.assert(_03_copy === _03_native, 'Test 3');

const _04_a = true;
const _04_b = 1;
const _04_native = _04_a + _04_b;
const _04_copy = plus(_04_a, _04_b);
console.assert(_04_copy === _04_native, 'Test 4');

const _05_a = true;
const _05_b = '1';
const _05_native = _05_a + _05_b;
const _05_copy = plus(_05_a, _05_b);
console.assert(_05_copy === _05_native, 'Test 5');

const _06_a = false;
const _06_b = 1;
const _06_native = _06_a + _06_b;
const _06_copy = plus(_06_a, _06_b);
console.assert(_06_copy === _06_native, 'Test 6');

const _07_a = false;
const _07_b = '1';
const _07_native = _07_a + _07_b;
const _07_copy = plus(_07_a, _07_b);
console.assert(_07_copy === _07_native, 'Test 7');

const _08_a = null;
const _08_b = 1;
const _08_native = _08_a + _08_b;
const _08_copy = plus(_08_a, _08_b);
console.assert(_08_copy === _08_native, 'Test 8');

const _09_a = undefined;
const _09_b = 1;
const _09_native = _09_a + _09_b;
const _09_copy = plus(_09_a, _09_b);
console.assert(Object.is(_09_copy, _09_native), 'Test 9');

const _10_a = null;
const _10_b = undefined;
const _10_native = _10_a + _10_b;
const _10_copy = plus(_10_a, _10_b);
console.assert(Object.is(_10_copy, _10_native), 'Test 10');


/*
  https://janke-learning.github.io/arithmetic-coercion/
*/
