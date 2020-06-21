function countdown (count) {
  // SAFETY CHECKS
  if (count < 0) { throw "Count below 0!"; }

  // TERMINATION
  if (count == 0) {
    console.log("END");
  }

  // RECURSION
  else {
    console.log(count);
    count--;
    countdown(count);
  }
}

// 10, 9, 8, 7, ... END
countdown(10);

// Uncaught exception
countdown(-5);