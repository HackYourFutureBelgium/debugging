'use strict';

/*
  browser:

  name:
  message:

  callstack:

  the mistake:
  the fix(es):
*/

const userName = 'chiobin';
console.log('userName:', typeof userName, userName);

if (userName.length > 4) {
  const isValidUserName = true;
} else {
  const isValidUserName = false;
}

console.log('isValidUserName:', typeof isValidUserName, isValidUserName);
