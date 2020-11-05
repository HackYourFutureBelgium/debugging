'use strict';


console.log('- broken JS -');
try {

  console.assert(false, 'it should throw');
} catch (err) {
  console.assert(err.name === 'ReferenceError', 'name fail');
  console.assert(err.message === "Cannot access 'turtle' before initialization", 'message fail');
}


console.log('- throw new -');
try {

  console.assert(false, 'it should throw');
} catch (err) {
  console.assert(err.name === 'ReferenceError', 'name fail');
  console.assert(err.message === "Cannot access 'turtle' before initialization", 'message fail');
}

