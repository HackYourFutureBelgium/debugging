'use strict';
console.log('-- begin --');

const word = 'pitsicola';

let index = -1;
while (index < _._) {
  index += 1;

  // skip characters with odd indexes
  if (index % _ !== _) {
    _;
  }

  const nextLetter = word[index];
  console.log(index + ': ' + nextLetter); // p, t, i, o, a
}

console.assert(_ === _._, 'index should be the same as the word length');


console.log('-- end --');