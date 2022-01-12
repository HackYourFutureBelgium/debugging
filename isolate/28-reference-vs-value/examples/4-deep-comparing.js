// #todo

'use strict';
console.log('-- begin --');

/* to test if two arrays contain the same entries
  you need to check each and every entry separately!
  JavaScript does not have a native way to do this

  this process is called deep comparing
*/

const expected = [4, 100, null, 'hi!'];

const firstArr = [4, 100, null, 'hi!'];
const secondArr = [4, 'null', 'good bye'];

// you can do it manually, but that's a very bad idea
//  way too many ways to make a mistake
//  and it's not practical for large arrays
const manualCheckFirst =
  firstArr[0] === expected[0] &&
  firstArr[1] === expected[1] &&
  firstArr[2] === expected[2] &&
  firstArr[3] === expected[3];
console.assert(manualCheckFirst, 'Compare first (manual)');

const manualCheckSecond =
  secondArr[0] === expected[0] &&
  secondArr[1] === expected[1] &&
  secondArr[2] === expected[2] &&
  secondArr[3] === expected[3];
console.assert(manualCheckSecond, 'Compare second (manual)');

/* more commonly you will use a function that does this for you
  the function below will compare each item in an array
    returns true if the arguments are deeply equal
    returns false if they are not
  the function is written more clearly so you can understand it better
    in later exercises you will use a different deepCompare
    it will be smaller so it takes up less space in the file
    but the logic will be the same
  soon you'll learn to deep compare with a professional assertion library
*/

const deepCompare = (actual, expect) => {
  // --- compare primitives and references ---

  // return true if they are the same primitive value
  //  or if they are a reference to the same object/array
  if (actual === expect || Object.is(actual, expect)) {
    return true;
  }

  // return false if either one is not a reference type
  if (Object(actual) !== actual || Object(expect) !== expect) {
    return false;
  }

  // --- if both are arrays, compare the lengths and entries ---

  if (Array.isArray(actual) && Array.isArray(expect)) {
    // return false if the arrays are not the same length
    if (!actual.length === expect.length) {
      return false;
    }

    // compare every entry in both arrays
    for (let index = 0; index < expected.length; index++) {
      const entriesAreDeeplyEqual = deepCompare(actual[index], expect[index]);

      // return false if any of the entries are not deeply equal
      if (!entriesAreDeeplyEqual) {
        return false;
      }
    }

    // return true if both arrays:
    //  are the same length
    //  have deeply equal entries
    return true;
  }

  // --- otherwise compare them as objects ---

  // return false if the objects have different numbers of keys
  const sameNumberOfKeys =
    Object.keys(actual).length === Object.keys(expect).length;
  if (!sameNumberOfKeys) {
    return false;
  }

  // compare every value in both objects
  for (const key of expect) {
    const valuesAreDeeplyEqual = deepCompare(actual[key], expect[key]);

    // return false if any values are not deeply equal
    if (!valuesAreDeeplyEqual) {
      return false;
    }
  }

  // return true if both objects:
  //  have the same number of keys
  //  all key/value pairs are deeply equal
  return true;
};

const deepCompareFirst = deepCompare(firstArr, expected);
console.assert(deepCompareFirst, 'Compare first (with function)'); // break point here

const deepCompareSecond = deepCompare(secondArr, expected);
console.assert(deepCompareSecond, 'Compare second (with function)'); // break point here

console.log('-- end --');
