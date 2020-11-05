'use strict';


console.log('- broken JS -');
try {

  console.assert(false, 'it should throw');
} catch (err) {
  console.assert(err.name === 'TypeError', 'name fail');
  console.assert(err.message === "Cannot read property 'length' of undefined", 'message fail');
}


console.log('- throw new -');
try {

  console.assert(false, 'it should throw');
} catch (err) {
  console.assert(err.name === 'TypeError', 'name fail');
  console.assert(err.message === "Cannot read property 'length' of undefined", 'message fail');
}
