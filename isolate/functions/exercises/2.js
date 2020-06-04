function scramble(param1, param2, param3) {
  const result = param1 + param3 + param2;
  return result;
}

const arg1 = _;
const arg2 = _;
const arg3 = _;
const returned1 = scramble(arg1, arg2, arg3);
const isTrue1 = returned1 === 'bac';
console.assert(isTrue1, 'Assertion 1');

const arg4 = _;
const arg5 = _;
const arg6 = _;
const returned2 = scramble(arg4, arg5, arg6);
const isTrue2 = returned2 === 'cab';
console.assert(isTrue2, 'Assertion 2');

const arg7 = "c";
const arg8 = "b";
const arg9 = "a";
const returned3 = scramble(_, _, _);
const isTrue3 = returned3 === 'abc';
console.assert(isTrue3, 'Assertion 3');

const arg10 = "b";
const arg11 = "a";
const arg12 = "c";
const returned4 = scramble(_, _, _);
const isTrue4 = returned4 === 'abc';
console.assert(isTrue4, 'Assertion 4');

const arg13 = _;
const arg14 = _;
const arg15 = _;
const returned5 = scramble(arg14, arg15, arg13);
const isTrue5 = returned5 === 'cba';
console.assert(isTrue5, 'Assertion 5');

const arg16 = "c";
const arg17 = "a";
const arg18 = "b";
const returned6 = scramble(_, _, _);
const isTrue6 = returned6 === 'abc';
console.assert(isTrue6, 'Assertion 6');

