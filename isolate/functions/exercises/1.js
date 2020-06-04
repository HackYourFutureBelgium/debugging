function scramble(param1, param2, param3) {
  const result = param3 + param1 + param2;
  return result;
}

const arg1 = "a";
const arg2 = "c";
const arg3 = "b";
const returned1 = scramble(arg1, arg2, arg3);
const isTrue1 = returned1 === _;
console.assert(isTrue1, 'Assertion 1');

const arg4 = "a";
const arg5 = "b";
const arg6 = "c";
const returned2 = scramble(arg4, arg5, arg6);
const isTrue2 = returned2 === _;
console.assert(isTrue2, 'Assertion 2');

const arg7 = "c";
const arg8 = "b";
const arg9 = "a";
const returned3 = scramble(arg8, arg9, arg7);
const isTrue3 = returned3 === _;
console.assert(isTrue3, 'Assertion 3');

const arg10 = "b";
const arg11 = "a";
const arg12 = "c";
const returned4 = scramble(arg12, arg11, arg10);
const isTrue4 = returned4 === _;
console.assert(isTrue4, 'Assertion 4');

const arg13 = "b";
const arg14 = "c";
const arg15 = "a";
const returned5 = scramble(arg14, arg15, arg13);
const isTrue5 = returned5 === _;
console.assert(isTrue5, 'Assertion 5');

const arg16 = "c";
const arg17 = "a";
const arg18 = "b";
const returned6 = scramble(arg18, arg17, arg16);
const isTrue6 = returned6 === _;
console.assert(isTrue6, 'Assertion 6');

