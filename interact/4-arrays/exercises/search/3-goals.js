'use strict';

alert(
  `enter as many texts as you want

then enter a search query (case in-sensitive)
-> only text that includes the query will be kept`
);

// -- gather strings --
const strings = [];

while (_) {
  /* === BEGIN: gather text entries from the user == */
  /* === END == */
}

// -- get search query --
let query = null;

while (_) {
  /* === BEGIN: gather a lower-case query from the user == */
  /* === END == */
}

// -- keep only strings that include the search query --
const matches = [];
/* === BEGIN: filter for text entries that include the query == */
/* === END == */

// -- generate a message for the user --
let message = `query: ${query}\nmatches: `;
for (const text of matches) {
  message += `${text}, `;
}

// -- alert the final message --
alert(message);

// -- log for developers --
console.log(strings, query, matches);
