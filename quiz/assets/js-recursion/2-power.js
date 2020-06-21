function power (base, exp) {
  // SAFETY CHECKS
  // Accept positive values only
  if (base < 0) { throw "Negative base value"; }
  if (exp < 0) { throw "Negative exponential value"; }

  // TERMINATION
  if (base == 0) { return 0; }
  if (exp == 0) { return 1; }

  // RECURSION
  else {
    exp--;
    return base * power(base, exp);
  }
}

// 32
var result = power(2, 5);
console.log(result);

// Exception
result = power(2, -5);