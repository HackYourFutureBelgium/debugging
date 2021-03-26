'use strict';

/*
  for...in give you access to each key in the object
*/

const menagerie = {
  swimming: 'mackerel',
  flying: 'crane',
  running: 'cheetah',
  jumping: 'spider',
};
console.log(menagerie);

// for...in with `const`
for (const key in menagerie) {
  console.log(key);
  // character = 'hello!'; // will throw an error
}

// for...in with `let`
for (let key in menagerie) {
  console.log(key);
  key = 'hello!'; // no error
  console.log(key);
}

// you can use bracket notation to get each value
for (const key in menagerie) {
  const value = menagerie[key];
  console.log('-' + value);
}
