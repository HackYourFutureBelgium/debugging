// #todo

'use strict';

{
  const a = true;

  +!!_;

  console.assert(_ === +!!a, 'Expression 1');
}

{
  const a = 'false';

  +!!_;

  console.assert(_ === +!!a, 'Expression 2');
}

{
  const a = 1;

  +!!_;

  console.assert(_ === +!!a, 'Expression 3');
}

{
  const a = 0;

  +!!_;

  console.assert(_ === +!!a, 'Expression 4');
}

{
  const a = '';

  +!!_;

  console.assert(_ === +!!a, 'Expression 5');
}
