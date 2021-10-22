// #todo

'use strict';

/* look out for:

  - variable declarations
  - missing condition in while loop
  - off-by-one in for loop
  - missing string concatenation

*/

const userInput = '';
const repetitions = NaN;
while (true) {
  userInput = prompt('enter a phrase to repeat:');

  if (userInput === '' || userInput === null) {
    alert('nope, enter something');
    continue;
  }

  const repetitionsInput = prompt('how many times do you want to repeat it?');

  repetitions = Number(repetitionsInput);

  if (Number.isNaN(repetitions)) {
    alert('"' + repetitionsInput + '" is not a number');
    continue;
  }

  const confirmMessage =
    'is this correct?\n\n' + '- "' + userInput + '"\n' + '- ' + repetitions;
  const confirmation = confirm(confirmMessage);
}

let repeatedInput = '';

for (let i = 1; i < repetitions; i++) {
  repeatedInput = userInput;
}

alert(`"userInput" -> "repeatedInput"`);
