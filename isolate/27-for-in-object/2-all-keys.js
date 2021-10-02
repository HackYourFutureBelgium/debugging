'use strict';
console.log('-- begin --');

// you can use a for ... in loop to get all the keys from an object
const menagerie = {
  swimming: 'mackerel',
  flying: 'crane',
  running: 'cheetah',
  jumping: 'spider',
};
console.log(menagerie);

const menagerieKeys = [];
for (const key in menagerie) {
  menagerieKeys.push(key);
}

console.log(menagerieKeys);

console.log('-- end --');
