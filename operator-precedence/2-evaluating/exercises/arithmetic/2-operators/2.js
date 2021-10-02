// #todo

'use strict';

{
  const a = 2;
  const b = 1;
  const c = 3;

  _ + _ * _;

  console.assert(_ === a + b * c, 'Expression 1');
}

{
  const a = 1;
  const b = 2;
  const c = 3;

  _ + _ * _;

  console.assert(_ === a + b * c, 'Expression 2');
}

{
  const a = 3;
  const b = 2;
  const c = 1;

  _ + _ * _;

  console.assert(_ === a + b * c, 'Expression 3');
}

{
  const a = 1;
  const b = 0;
  const c = 2;

  _ + _ * _;

  console.assert(_ === a + b * c, 'Expression 4');
}

{
  const a = 1;
  const b = 2;
  const c = 0;

  _ + _ * _;

  console.assert(_ === a + b * c, 'Expression 5');
}
