'use strict';

{
  const a = 4;
  const b = '4';
  const c = '4';

  4 !== ('4' && !'4');
  // -> &&, '4' is truthy so we move on to the right side
  4 !== !'4';
  // -> !, convert '4' to a boolean and negate it
  4 !== false;
  // -> !==
  true;

  console.assert(true === (a !== (b && !c)), 'Expression 1');
}

{
  const a = true;
  const b = '0';
  const c = 0;

  true !== ('0' && !0);
  true !== !0;
  true !== true;
  false;

  console.assert(false === (a !== (b && !c)), 'Expression 2');
}

{
  const a = 12;
  const b = 0;
  const c = 0.12;

  12 !== (0 && 0.12);
  // -> &&, 0 is falsy so we use that value immediately.  short circuiting!
  12 !== 0;
  // -> !==
  true;

  console.assert(true === (a !== (b && !c)), 'Expression 3');
}

{
  const a = 'True';
  const b = true;
  const c = 'true';

  'True' !== (true && !'true');
  'True' !== !'true';
  'True' !== false;
  true;

  console.assert(true === (a !== (b && !c)), 'Expression 4');
}

{
  const a = false;
  const b = undefined;
  const c = null;

  false !== (undefined && !null);
  false !== undefined;
  true;

  console.assert(true === (a !== (b && !c)), 'Expression 5');
}
