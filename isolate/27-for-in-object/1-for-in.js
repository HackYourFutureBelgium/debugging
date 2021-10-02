'use strict';
console.log('-- begin --');

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

// for...in with
for (const key in menagerie) {
  console.log(key);
  // key = 'hello!'; // will throw an error
}

// you can use bracket notation to get each value
for (const key in menagerie) {
  const value = menagerie[key];
  console.log('-' + value);
}

console.log('-- end --');
