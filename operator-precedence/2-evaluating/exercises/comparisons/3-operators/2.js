// #todo

'use strict';

{
  const a = 1;
  const b = 2;
  const c = 3;
  const d = 3;

  _ < _ !== _ <= _;

  console.assert(_ === (a < b !== c <= d), 'Expression 1');
}

{
  const a = 1;
  const b = 1;
  const c = 2;
  const d = 2;

  _ < _ !== _ <= _;

  console.assert(_ === (a < b !== c <= d), 'Expression 2');
}

{
  const a = 10;
  const b = 9;
  const c = 9;
  const d = 10;

  _ < _ !== _ <= _;

  console.assert(_ === (a < b !== c <= d), 'Expression 3');
}

{
  const a = 2;
  const b = 2;
  const c = 5;
  const d = 4;

  _ < _ !== _ <= _;

  console.assert(_ === (a < b !== c <= d), 'Expression 4');
}

{
  const a = 1;
  const b = 3;
  const c = 1;
  const d = 3;

  _ < _ !== _ <= _;

  console.assert(_ === (a < b !== c <= d), 'Expression 5');
}
