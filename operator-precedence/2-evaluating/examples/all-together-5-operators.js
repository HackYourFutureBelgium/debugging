'use strict';

{
  const a = false;
  const b = 'false';

  typeof typeof false === typeof typeof 'false';
  // -> first `typeof` on the left side of ===
  typeof 'boolean' === typeof typeof 'false';
  // -> second `typeof` on the left side of ===
  'string' === typeof typeof 'false';
  // -> first `typeof` on the right side of ===
  'string' === typeof 'string';
  // -> second `typeof` on the right side of ===
  'string' === 'string';
  // -> ===
  true;

  console.assert(
    true === (typeof typeof a === typeof typeof b),
    'Expression 1',
  );
}

{
  const a = 1;
  const b = null;

  typeof typeof 1 === typeof typeof null;
  typeof 'number' === typeof typeof null;
  'string' === typeof typeof 'object';
  'string' === typeof 'string';
  'string' === 'string';
  true;

  console.assert(
    true === (typeof typeof a === typeof typeof b),
    'Expression 2',
  );
}

{
  const a = NaN;
  const b = 14;

  typeof typeof NaN === typeof typeof 14;
  typeof 'number' === typeof typeof 14;
  'string' === typeof typeof 'number';
  'string' === typeof 'string';
  'string' === 'string';
  true;

  console.assert(
    true === (typeof typeof a === typeof typeof b),
    'Expression 3',
  );
}

{
  const a = 1.4;
  const b = undefined;

  typeof typeof 1.4 === typeof typeof undefined;
  typeof 'number' === typeof typeof undefined;
  'string' === typeof typeof 'undefined';
  'string' === typeof 'string';
  'string' === 'string';
  true;

  console.assert(
    true === (typeof typeof a === typeof typeof b),
    'Expression 4',
  );
}

{
  const a = 'string';
  const b = 'typeof';

  typeof typeof 'string' === typeof typeof 'typeof';
  typeof 'string' === typeof typeof 'typeof';
  'string' === typeof typeof 'typeof';
  'string' === typeof 'string';
  'string' === 'string';
  true;

  console.assert(
    true === (typeof typeof a === typeof typeof b),
    'Expression 5',
  );
}
