'use strict';

/*
  only keep text that contain the search query
*/

/* ===== declare functions ===== */

/**
 *
 */
const search = () => {};
{
  const _1_result = search(['a', 'b', 'A', 'AB'], 'A');
  const _1_test = deepCompare(_1_result, ['A', 'AB']);
  console.assert(_1_test, 'Test 1');

  const _2_result = search(['a', 'aby', 'xyz', 'abc', '3'], 'ab');
  const _2_test = deepCompare(_2_result, ['aby', 'abc']);
  console.assert(_2_test, 'Test 2');

  // tests are in a block scope so `argument` is not global
  const argument = ['x', 'y', 'z'];
  search(argument, 'y');
  console.assert(
    deepCompare(argument, ['x', 'y', 'z']),
    'Test 3: no side effects'
  );
}

/* ===== main program (use functions) ===== */

alert(
  `enter as many texts as you want

then enter a search query (case in-sensitive)
-> only text that includes the query will be kept`
);

// -- gather strings --
const strings = [];
while (true) {
  const input = prompt('enter some or click "cancel"');

  if (input === null) {
    break;
  } else if (input === '') {
    alert('nothing is not allowed');
    continue;
  }

  strings.push(input);
}

// -- get search query --
let query = null;
while (query === null) {
  query = prompt('enter a search query');
}

// -- keep only strings that include the search query --
const matches = [];
const queryRegExp = new RegExp(query, 'i');
for (const text of strings) {
  if (queryExpression.test(text)) {
    matches.push(text);
  }
}

// -- generate a message for the user --
let message = `query: ${query}\nmatches: `;
for (const text of matches) {
  message += `${text}, `;
}

// -- alert the final message --
alert(message);

// -- log for developers --
console.log(strings, query, matches);

/* ========== hoisted testing dependency ========== */

// prettier-ignore
function deepCompare (actual, expect) {  return actual === expect || Object.is(actual, expect)|| (Object(actual) === actual && Object(expect) === expect) && (Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompare(actual[index], expect))|| Object.keys(actual).length === Object.keys(expect).length && Object.keys(expect).every((key) => deepCompare(actual[key], expect[key])));}
