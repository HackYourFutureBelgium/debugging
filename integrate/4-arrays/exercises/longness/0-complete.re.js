'use strict';

/*
  only keep words that are the right length
*/

alert(
  `enter as many words as you want

then enter a length
-> only words of the right length will remain`
);

// -- gather words --

// you can use `const` because the variable is not reassigned
//  the contents of the array will change
//  but the variable will still reference the same array
const words = [];
while (true) {
  const input = prompt('enter a word or click "cancel"');

  if (input === null) {
    break;
  } else if (input === '') {
    alert('nothing is not allowed');
    continue;
  }

  const containsWhitespace = new RegExp('\\s', 'g').test(input);
  if (containsWhitespace) {
    alert("words can't have white space");
  } else {
    words.push(input);
  }
}

// -- get the length to filter --
let lengthToKeep = NaN;
while (true) {
  const input = prompt('how long should the words be? enter a number:');
  lengthToKeep = Number(input);

  if (input === '' || input === null) {
    alert('enter something');
  } else if (Number.isNaN(lengthToKeep)) {
    alert(`"${input}" is not a number`);
  } else {
    break;
  }
}

// -- keep only words with the right length --
const keepThese = [];
for (const word of words) {
  const isCorrectLength = word.length === lengthToKeep;
  if (isCorrectLength) {
    keepThese.push(word);
  }
}

// -- generate a message for the user --
let message = `length: ${lengthToKeep}\nwords: `;
for (const word of keepThese) {
  message += `${word}, `;
}

// -- alert the final message --
alert(message);

// -- log for developers --
console.log(words, lengthToKeep, keepThese);
