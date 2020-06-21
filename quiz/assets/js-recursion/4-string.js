function rString (text) {
  // SAFETY CHECKS
  // Empty string
  if (text.length <= 0) { throw "Invalid string!"; }

  // TERMINATION
  if (text.length == 1) { return text; }

  // RECURSION
  else {
    return text.slice(-1) + rString(text.slice(0, -1));
  }
}

// dlrow
var myString = rString("world");
console.log(myString);

// Error
myString = rString("");