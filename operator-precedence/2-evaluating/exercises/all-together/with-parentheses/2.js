// #todo

'use strict';

{
  const a = 0;
  const b = false;
  const c = 1;

  !_ + +(_ === _);

  console.assert(_ === !a + +(b === c), 'Expression 1');
}

{
  const a = 0;
  const b = false;
  const c = 0;

  !_ + +(_ === _);

  console.assert(_ === !a + +(b === c), 'Expression 2');
}

{
  const a = '0';
  const b = '0';
  const c = 1;

  !_ + +(_ === _);

  console.assert(_ === !a + +(b === c), 'Expression 3');
}

{
  const a = true;
  const b = false;
  const c = 1;

  !_ + +(_ === _);

  console.assert(_ === !a + +(b === c), 'Expression 4');
}

{
  const a = 'true';
  const b = '';
  const c = true;

  !_ + +(_ === _);

  console.assert(_ === !a + +(b === c), 'Expression 5');
}
