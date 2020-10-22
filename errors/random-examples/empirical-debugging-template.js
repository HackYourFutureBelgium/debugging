// there will be a whole unit on debugging before solution design
// it will cover this template and have smaller, focused, exercises
// in the mean time:
//  https://medium.com/northcoders/understanding-bugs-and-errors-in-javascript-675ebb0a109a
//  https://codeburst.io/5-common-mistakes-that-every-new-javascript-programmer-does-d0559770d345
{
console.log('--- debugging this code ---');

  // the raw code
  let keys = {
    a: 'mark',
    b: 'susy',
    c: 'lionel'
  };
  let values = {
    a: 'architect',
    b: 'poet',
    c: 'chauffeur'
  }
  let map = [keys, values];
  let introductions = [];
  for (let person of map) {
    let new_intro = person[keys] + ' is a ' + person[values]
    introductions.push(new_intro);
  };
  console.log(introductions);

  // functionized for testing
  function buggy_code(_keys, _values) {
    let map = [_keys, _values];
    let introductions = [];
    for (let person of map) {
      let new_intro = person[_keys] + ' is a ' + person[_values]
      introductions.push(new_intro);
    };
    return introductions;
  }

console.log('--- tests it should pass ---');

  const expected_tests = [
    {name: 'exp: my friends', args: [keys, values],
      expected: ['mark is a architect', 'susy is a poet', 'lionel is a chauffeur']},
    {name: 'exp: your friends',
      args: [{a: 'ming'}, {a: 'baker'}],
      expected: ['ming is a baker']},
    {name: 'exp: her friends',
      args: [{a: 'anjali', b: 'markus'}, {a: 'explorer', b: 'prof'}],
      expected: ['anjali is a explorer', 'markus is a prof']}
  ];
  run_tests(buggy_code, expected_tests);

console.log('--- tests it does pass ---');

  const buggy_tests = [
    {name: 'bug: my friends', args: [keys, values],
      expected: ['undefined is a undefined', 'undefined is a undefined']},
    {name: 'bug: your friends',
      args: [{a: 'ming'}, {a: 'baker'}],
      expected: ['undefined is a undefined', 'undefined is a undefined']},
    {name: 'bug: her friends',
      args: [{a: 'anjali', b: 'markus'}, {a: 'explorer', b: 'prof'}],
      expected: ['undefined is a undefined', 'undefined is a undefined']},
  ];
  run_tests(buggy_code, buggy_tests);

console.log('--- expanded ---');

  // // for-of refactor to for
  // function buggy_code_traced_for(_keys, _values) {
  //  let map = [_keys, _values];
  //  let introductions = [];
  //  for (let i = 0; i < map.length; i++) {
  //    let new_intro = map[i][_keys] + ' is a ' + map[i][_values]
  //    introductions.push(new_intro);
  //  };
  //  return introductions;
  // };

  // for refactor to while
  function buggy_code_traced_while(_keys, _values) {
    let map = [_keys, _values];
    let introductions = [];
    let i = 0;
    while (i < map.length) {
      let new_intro = map[i][_keys] + ' is a ' + map[i][_values]
      introductions.push(new_intro);
      i++;
    };
    return introductions;
  };
  run_tests(buggy_code_traced_while, expected_tests);
  run_tests(buggy_code_traced_while, buggy_tests);


console.log('--- logged ---');

  console.log(' no need to log, i see the problem');


console.log('--- experiment 1 ---')

  console.log(' iterating over _keys instead of map');
  function experiment_1(_keys, _values) {
    let map = [_keys, _values];
    let introductions = [];

    for (let index in _keys) {
      let new_intro = _keys[index] + ' is a ' + _values[index];
      introductions.push(new_intro);
    };

    return introductions;
  };
  run_tests(experiment_1, expected_tests);
  run_tests(experiment_1, buggy_tests);

console.log('--- final refactor ---');

  console.log(' getting rid of "map" entirely, its useless and confusing');
  function final_refactor(_keys, _values) {
    let introductions = [];

    for (let index in _keys) {
      let new_intro = _keys[index] + ' is a ' + _values[index];
      introductions.push(new_intro);
    };

    return introductions;
  };
  run_tests(final_refactor, expected_tests);
  run_tests(final_refactor, buggy_tests);

  // the raw code
  keys = {
    a: 'mark',
    b: 'susy',
    c: 'lionel'
  };
  values = {
    a: 'architect',
    b: 'poet',
    c: 'chauffeur'
  }
  introductions = [];
  for (let index in keys) {
    let new_intro = keys[index] + ' is a ' + values[index];
    introductions.push(new_intro);
  };
  console.log(introductions);










// testing utils
  function run_tests(_target, _cases, _log) {
    for (let t_case of _cases) {
      let expected = t_case.expected;

      let actual;
      let msg;
      let log;
      if (_log) {
        log = _target(... t_case.args, true);
        actual = log.result;
      } else {
        actual = _target(... t_case.args, false);
      };

      let pass;
      if (typeof expected === 'object') {
        actual = JSON.stringify(actual);
        expected = JSON.stringify(expected);
        pass = actual === expected;
      } else {
        pass = actual === expected;
      };

      if (!pass && _log) {
        console.log(`    ${t_case.name}: \n` +
            "actual: ", log, "\n" +
            `expected: {${typeof expected}, ${expected}}`);
      } else if (!pass) {
        console.log(`${t_case.name}: \n` +
            `   actual: {${typeof actual}, ${actual}} \n` +
            `   expected: {${typeof expected}, ${expected}}`);
      };
    };
  };
}
