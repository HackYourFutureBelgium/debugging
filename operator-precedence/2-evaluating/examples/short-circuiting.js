'use strict';

{
  const a = true;
  const b = true;
  const c = false;
  const d = false;

  (true || true) && (false || false);
  // -> ||, left value is truthy so || evaluates to `true`
  true && (false || false);
  // -> &&, left value is truthy so && goes on to evaluate the right side
  false || false;
  // -> ||, left side is falsy so || evaluates to the right `false`
  false;

  console.assert(false === ((a || b) && (c || d)), 'Expression 1');
}

{
  const a = 'false';
  const b = false;
  const c = 0;
  const d = 1;

  ('false' || false) && (0 || 1);
  'false' && (0 || 1);
  0 || 1;
  1;

  console.assert(1 === ((a || b) && (c || d)), 'Expression 2');
}

{
  const a = false;
  const b = 0;
  const c = 'false';
  const d = true;

  (false || 0) && ('false' || true);
  0 && ('false' || true);
  0;

  console.assert(0 === ((a || b) && (c || d)), 'Expression 3');
}

{
  const a = 12;
  const b = 13;
  const c = false;
  const d = ':)';

  (12 || 13) && (false || ':)');
  12 && (false || ':)');
  false || ':)';
  (':)');

  console.assert(':)' === ((a || b) && (c || d)), 'Expression 4');
}

{
  const a = 'Java';
  const b = 'Script';
  const c = '!';
  const d = '?';

  ('Java' || 'Script') && ('!' || '?');
  'Java' && ('!' || '?');
  '!' || '?';
  ('!');

  console.assert('!' === ((a || b) && (c || d)), 'Expression 5');
}

{
  const a = 0;
  const b = '';
  const c = false;
  const d = null;

  (0 || '') && (false || null);
  '' && (false || null);
  ('');

  console.assert('' === ((a || b) && (c || d)), 'Expression 6');
}
