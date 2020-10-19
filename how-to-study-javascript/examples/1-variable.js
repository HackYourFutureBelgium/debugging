/* 1: use strict
  let javascript help me avoid some easy mistakes
*/

/* 2: declare and assign the variable hello
  i'll be reassigning and asserting this variable
*/
let hello = "world";

/* 3: assert the value of hello
  to make sure the value is correct at this point in the program
*/
console.assert(hello === 'world', 'hello should be "world"')


/* 4: reassign hello
  it makes no sense for a program to say "world" when it's finished
*/
hello = "good bye"

/* 5: assert the value of hello
  hello's value has changed, so let's test it again
*/
console.assert(hello === 'good bye', 'hello should be "good bye"')


/* 6: log the value of hello
  so the programmer can see the final value of this program
*/
console.log(hello)
