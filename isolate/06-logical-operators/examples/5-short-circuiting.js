// #todo

/* Short-Circuiting

  This is a fun and tricky thing about &&, ||, ? :
    have fun!

  Beau teaches JavaScript: https://www.youtube.com/watch?v=r7v6EIiHfVA
  Steve Griffith: https://www.youtube.com/watch?v=MR0ohAODlOI
  https://javascript.info/logical-operators
    search (ctr-f) for "Short-circuit"
*/

const one = 1;
const two = 2;

console.log('--- a || b ---');

const or1 = one === one || two === two;
console.log('or1:', typeof or1, or1);

const or2 = one === two || two === two;
console.log('or2:', typeof or2, or2);

const or3 = one === one || one === two;
console.log('or3:', typeof or3, or3);

const or4 = one === two || two === one;
console.log('or4:', typeof or4, or4);

console.log('--- a && b ---');

const and1 = one === one && two === two;
console.log('and1:', typeof and1, and1);

const and2 = one === two && two === two;
console.log('and2:', typeof and2, and2);

const and3 = one === one && one === two;
console.log('and3:', typeof and3, and3);

const and4 = one === two && two === one;
console.log('and4:', typeof and4, and4);

console.log('--- a ? b : c ---');

const ternary1 = true ? one === one : two === two;
console.log('ternary1:', typeof ternary1, ternary1);

const ternary2 = false ? one === one : two === two;
console.log('ternary2:', typeof ternary2, ternary2);

console.log('-- end --');
