// PS. study this in JS Tutor!

// variables declared in a function body are SCOPED to that function
//  this includes parameters and locally declared variables
function typeAndValue(param) {
  console.log(typeof param, param);
  const result = `type is: ${typeof param}. value is: ${param}.`;
  console.log(typeof result, result);
  return result;
}

console.log('-- example 1 --');
const arg1 = 5;
const returned1 = typeAndValue(arg1);
console.log(typeof returned1, returned1);
// console.log(typeof param, param);
// console.log(typeof result, result);

console.log('-- example 2 --');
const arg2 = 'hi!';
const returned2 = typeAndValue(arg2);
console.log(typeof returned2, returned2);
// console.log(typeof param, param);
// console.log(typeof result, result);

console.log('-- example 3 --');
const arg3 = null;
const returned3 = typeAndValue(arg3);
console.log(typeof returned3, returned3);
// console.log(typeof param, param);
// console.log(typeof result, result);
