'use strict';

/* mirror

  a user can enter text and have it reflected my a mirror
  - given the user cancels, they are prompted again
  - given the user inputs anything, their input is reflected

  test cases:
    '' -> '|'
    'a' -> 'a|a'
    'hello' -> 'olleh|hello'
    ':)' -> '):|:)'

  the bug: (describe what is wrong with the program)

  your fix: (describe how you fixed it)

*/

let text = null;
while (text === null) {
  text = prompt('enter some text, it will be mirrored');
}

let mirrored = '|';
for (const character of text) {
  mirrored = mirrored + character + mirrored;
}

alert(mirrored);

/* experiments

  name:
    predict:
    actual:
    why:

*/
