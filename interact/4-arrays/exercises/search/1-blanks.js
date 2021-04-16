'use strict';

/*
  only keep text that contain the search query
*/

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
    _;
  } else if (input === '') {
    alert('nothing is not allowed');
    _;
  }

  strings.push(input);
}

// -- get search query --
let query = null;
while (query === null) {
  const input = prompt('enter a search query');
  if (input !== null) {
    _ = input.toLowerCase();
  }
}

// -- keep only strings that include the search query --
const matches = [];
for (const text of strings) {
  const lowerText = _.toLowerCase();
  if (_.includes(_)) {
    matches.push(_);
  }
}

// -- generate a message for the user --
let message = `query: ${query}\nmatches: `;
for (const text of _) {
  message += `${text}, `;
}

// -- alert the final message --
alert(message);

// -- log for developers --
console.log(strings, query, matches);
