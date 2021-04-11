# Refactoring Loops

There's many different ways to write a loop in JS, so far you've seen `while` loops, `for...of` loops with strings and `for` loops. With so many options it can be tricky to decide which one to use. Learning to refactor from one loop type to the other can help to understand which is best for your code (hint, choose the loop that's easiest to read!):

- `for...of` loops can always be refactored to a `for` loop:

  ```js
  'use strict';

  const name = 'alice';

  for (const letter of name) {
    console.log(letter);
  }

  for (let i = 0; i < name.length; i++) {
    const letter = name[i];
    console.log(letter);
  }
  ```

- `for` loops can always be refactored to `while` loops:

  ```js
  'use strict';

  const max = 5;

  for (let i = 0; i < max; i++) {
    console.log(i);
  }

  let j = 0;
  while (j < max) {
    console.log(j);
    j++;
  }
  ```

- so `for...of` loops can always be refactored to `while` loops!

  ```js
  'use strict';

  const name = 'alice';

  for (const letter of name) {
    console.log(letter);
  }

  let i = 0;
  while (i < name.length) {
    const letter = name[i];
    console.log(letter);
    i++;
  }
  ```
