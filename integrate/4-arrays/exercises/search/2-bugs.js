'use strict';

/*

  look out for:
  - loop conditions
  - conditional checks
  - pushing to arrays
  - assignments
  - off-by-1

*/

alert(
  `enter as many texts as you want

then enter a search query (case in-sensitive)
-> only text that includes the query will be kept`
);

// -- gather strings --
const strings = '';
let stillPushing = true;
while (!stillPushing) {
  const input = prompt('enter some or click "cancel"');

  if ((input = null)) {
    stillPushing = false;
  } else if (input === '') {
    alert('nothing is not allowed');
    continue;
  }

  strings.push(input);
}

// -- get search query --
let query = null;
while (query === null) {
  const input = prompt('enter a search query');
  if (input === null) {
    query = input.toLowerCase();
  }
}

// -- keep only strings that include the search query --
const matches = [];
for (const text of strings) {
  const lowerText = text.toLowerCase();
  if (lowerText.includes(query)) {
    matches += text;
  }
}

// -- generate a message for the user --
let message = `query: ${query}\nmatches: `;
for (let i = 1; i <= matches.length; i++) {
  const text = matches[i];
  message = `${text}, `;
}

// -- alert the final message --
alert(message);

// -- log for developers --
console.log(strings, query, matches);
