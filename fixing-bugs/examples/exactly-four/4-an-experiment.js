'use strict';

/* exactly 4

  a user can enter a number and know if it is 4 characters long
  - given the input is null, they canceled :(
  - given the input is sorter than 4, it is too short
  - given the input is longer than 4, it is too long
  - given the input is exactly 4 characters, it's perfect

  test cases:
    null -> 'you canceled :('
    '' -> 'too short'
    'ab' -> 'too short'
    'abc' -> 'too short'
    'abcd' -> 'perfect!'
          -> 'too short'
    'abcde' -> 'too long'
    'abcdef' -> 'too long'

  the bug: the program says that a string with 4 characters is too short

  your fix:

*/

const input = prompt('enter anything with 4 characters');

let message;
if (input === null) {
  message = 'you canceled :(';
} else {
  // ! i thought this would be 'false' for input with length 4
  // 1. replaced <= with <
  if (input.length < 4) {
    message = 'too short';
  } else if (input.length >= 4) {
    message = 'too long';
  } else {
    message = 'perfect!';
  }
}

alert(message);

/* experiments

  1. first comparison seems wrong
    predict: the first condition is evaluating true when it should not (input is 4 characters long)
      if i replace the first condition with < the failing test case should pass
    actual: 'abcd' -> 'too long'
    why: this didn't pass but is a step in the right direction
      instead of going to the else path, it followed the second path

*/
