/* Short-Circuiting

  This is a fun and tricky thing about &&, ||, ? :
    have fun!

  Beau teaches JavaScript: https://www.youtube.com/watch?v=r7v6EIiHfVA
  Steve Griffith: https://www.youtube.com/watch?v=MR0ohAODlOI
  https://javascript.info/logical-operators
    search (ctr-f) for "Short-circuit"
*/

const logReturn = arg => {
  console.log(arg);
  return arg;
};

console.log('--- a || b ---');

const or1 = logReturn(true) || logReturn(true);
console.log('or1:', typeof or1, or1);

const or2 = logReturn(false) || logReturn(true);
console.log('or2:', typeof or2, or2);

const or3 = logReturn(true) || logReturn(false);
console.log('or3:', typeof or3, or3);

const or4 = logReturn(false) || logReturn(false);
console.log('or4:', typeof or4, or4);

console.log('--- a && b ---');

const and1 = logReturn(true) && logReturn(true);
console.log('and1:', typeof and1, and1);

const and2 = logReturn(false) && logReturn(true);
console.log('and2:', typeof and2, and2);

const and3 = logReturn(true) && logReturn(false);
console.log('and3:', typeof and3, and3);

const and4 = logReturn(false) && logReturn(false);
console.log('and4:', typeof and4, and4);

console.log('--- a ? b : c ---');

const ternary1 = logReturn(true) ? logReturn('b') : logReturn('c');
console.log('ternary1:', typeof ternary1, ternary1);

const ternary2 = logReturn(false) ? logReturn('b') : logReturn('c');
console.log('ternary2:', typeof ternary2, ternary2);
