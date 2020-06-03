// PS. study this in JS Tutor!

// RETURN VALUES allow you to send values from functions to global scope
function describeValue(param) {
  return `${typeof param}, ${param}`;
  console.log('nothing after a return statement is executed!');
}

// to save return values for later, assign them to a variable
const returned1 = describeValue(4.0);
const isTrue1 = returned1 === 'number, 4';
console.assert(isTrue1, 'Assertion 1');

const returned2 = describeValue('4.0');
const isTrue2 = returned2 === 'string, 4.0';
console.assert(isTrue2, 'Assertion 2');

const arg3 = null;
const returned3 = describeValue(arg3);
const isTrue3 = returned3 === 'object, null';
console.assert(isTrue3, 'Assertion 3');

const arg4 = undefined;
const returned4 = describeValue(arg4);
const isTrue4 = returned4 === 'undefined, undefined';
console.assert(isTrue4, 'Assertion 4');

const returned5 = describeValue();
const isTrue5 = returned5 === 'undefined, undefined';
console.assert(isTrue5, 'Assertion 5');
