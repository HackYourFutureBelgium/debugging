'use strict';
console.log('-- begin --');

// you can use a for ... in loop to get all the values from an object
const menagerie = {
  swimming: 'mackerel',
  flying: 'crane',
  running: 'cheetah',
  jumping: 'spider',
};
console.log(menagerie);

const menagerieValues = [];
for (const key in menagerie) {
  const value = menagerie[key];
  menagerieValues.push(value);
}

console.log(menagerieValues);

console.log('-- end --');
