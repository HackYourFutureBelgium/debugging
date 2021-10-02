// #todo

'use strict';

{
  const a = 2;
  const b = 4;
  const c = 6;
  const d = 0;

  _ > _ + _ < _;

  console.assert(_ === a > b + c < d, 'Expression 1');
}

{
  const a = 4;
  const b = 2;
  const c = 1;
  const d = 0;

  _ > _ + _ < _;

  console.assert(_ === a > b + c < d, 'Expression 2');
}

{
  const a = 4;
  const b = 2;
  const c = 1;
  const d = 1;

  _ > _ + _ < _;

  console.assert(_ === a > b + c < d, 'Expression 3');
}

{
  const a = 0;
  const b = 1;
  const c = 1;
  const d = 0;

  _ > _ + _ < _;

  console.assert(_ === a > b + c < d, 'Expression 4');
}

{
  const a = 1;
  const b = 0;
  const c = 0;
  const d = 1;

  _ > _ + _ < _;

  console.assert(_ === a > b + c < d, 'Expression 5');
}
