# Refactoring Truthiness Operators

You might already noticed that `&&`, `||` and `_?_:_` are different from the other operators such as `+`, `===`, `!` or `>=`. One way to gain a deeper understanding of these _truthiness operators_ is to practice refactoring them to conditionals and back. This will help you to understand _short circuiting_ and how logical operators are almost like control flow.

What makes the truthiness operators unique is that they do not _produce_ a new value, they do not change the values that are passed in. Instead they make a decision about which value to return.

Here's a quick reference, you'll get a chance to go deeper in the `/exercises`:

## and: `_ && _`

```js
'use strict';

const a = _;
const b = _;

const andOperator = a && b;

let andConditional = a;
if (andConditional) {
  andConditional = b;
}

const areTheSameValue = Object.is(andOperator, andConditional);
console.assert(areTheSameValue, 'this will always pass!');
```

## or: `_ || _`

```js
'use strict';

const a = _;
const b = _;

const orOperator = a || b;

let orConditional = a;
if (!orConditional) {
  orConditional = b;
}

const areTheSameValue = Object.is(orOperator, orConditional);
console.assert(areTheSameValue, 'this will always pass!');
```

## ternary: `_ ? _ : _`

```js
'use strict';

const a = _;
const b = _;
const c = _;

const ternaryOperator = a ? b : c;

let ternaryConditional;
if (a) {
  ternaryConditional = b;
} else {
  ternaryConditional = c;
}

const areTheSameValue = Object.is(ternaryOperator, ternaryConditional);
console.assert(areTheSameValue, 'this will always pass!');
```
