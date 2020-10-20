/* 1: use strict
  to help us avoid making easy mistakes
*/
'use strict';

/* 2: declare exampling
  this variable will be asserted at the end of the script
*/
let exampling;

/* 3: reassign exampling
  make sure it goes down the correct path
*/
exampling = true;

/* 4: conditional check - exampling
  check the truthiness of exampling to decide which path to take
*/
if (exampling) {
  /* 5: reassign exampling
    reassign the final value for asserting
  */
  exampling = 'path 1';
} else {
  exampling = 'path 2';
}

/* 6: assert exampling's value
  make sure the program behaved correctly
*/
console.assert(exampling === 'path 1', 'example should be "path 1"');
