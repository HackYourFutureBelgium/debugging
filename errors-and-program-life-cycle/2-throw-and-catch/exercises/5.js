'use strict';


console.log('- broken JS -');
try {

  console.assert(false, 'it should throw');
} catch (err) {
  console.assert(err.name === 'ReferenceError', 'name fail');
  console.assert(err.message === "turtle is not defined", 'message fail');
}


console.log('- throw new -');
try {

  console.assert(false, 'it should throw');
} catch (err) {
  console.assert(err.name === 'ReferenceError', 'name fail');
  console.assert(err.message === "turtle is not defined", 'message fail');
}
