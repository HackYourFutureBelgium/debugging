'use strict';

// you can use a for ... in loop to get all the keys from an object
const menagerie = {
  swimming: 'mackerel',
  flying: 'crane',
  running: 'cheetah',
  jumping: 'spider',
};
console.log(menagerie);

const menagerieKeys = [];
for (let key in menagerie) {
  menagerieKeys.push(key);
}

console.log(menagerieKeys);
