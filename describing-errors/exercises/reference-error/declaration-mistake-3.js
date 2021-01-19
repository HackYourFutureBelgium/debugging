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

if (userName.length > 3) {
  isValidUserName = true;
}

let isValidUserName;

if (userName.length <= 3) {
  isValidUserName = false;
}

console.log('isValidUserName:', typeof isValidUserName, isValidUserName);
