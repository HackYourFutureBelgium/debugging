'use strict';
console.log('-- begin --');

// objects work the same as arrays:

// to avoid side effects:
//  1. create a new object
//  3. read from the old object
//  4. write values to a new object

const createModifiedCopy = (oldObject, keyToUpdate, newValue) => {
  const newObject = {};
  for (const key in oldObject) {
    newObject[key] = oldObject[key];
  }
  newObject[keyToUpdate] = newValue;
  return newObject;
};

const user = {
  name: 'robert',
  password: 'Pa$$wrrd',
};

const copy1 = createModifiedCopy(user, 'password', 'hello');
console.assert(copy1.password === 'hello', 'Test 1 a');
console.assert(user.password === 'Pa$$wrrd', 'Test 1 b');

const copy2 = createModifiedCopy(user, 'name', 'laura');
console.assert(copy2.name === 'laura', 'Test 2 a');
console.assert(user.name === 'robert', 'Test 2 b');

// PS. there are many ways to copy an array in JS.
// we chose a loop to show the idea of creating and filling a new array
//  https://www.samanthaming.com/tidbits/35-es6-way-to-clone-an-array/
//  https://futurestud.io/tutorials/clone-copy-an-array-in-javascript-and-node-js


console.log('-- end --');