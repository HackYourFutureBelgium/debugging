// #todo

'use strict';

{
  const a = 4;
  const b = '4';
  const c = '4';

  _ !== _ && !_;

  console.assert(_ === (a !== b && !c), 'Expression 1');
}

{
  const a = 0;
  const b = '0';
  const c = 0;

  _ !== _ && !_;

  console.assert(_ === (a !== b && !c), 'Expression 2');
}

{
  const a = 12;
  const b = 0;
  const c = 0.12;

  _ !== _ && !_;

  console.assert(_ === (a !== b && !c), 'Expression 3');
}

{
  const a = 'True';
  const b = 'true';
  const c = true;

  _ !== _ && !_;

  console.assert(_ === (a !== b && !c), 'Expression 4');
}

{
  const a = null;
  const b = undefined;
  const c = false;

  _ !== _ && !_;

  console.assert(_ === (a !== b && !c), 'Expression 5');
}
