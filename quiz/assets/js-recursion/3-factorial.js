function factorial (number) {
  // SAFETY CHECKS
  // Accept positive values only
  if (number <= 0) { throw "Invalid number!"; }

  // TERMINATION
  if (number == 1) { return 1; }

  // RECURSION
  else {
    return number * factorial(number-1);
  }
}

// Factorial 4 = 4 X 3 X 2 X 1 = 24
var result = factorial(4);
console.log(result);

// Exception
result = factorial(-5);