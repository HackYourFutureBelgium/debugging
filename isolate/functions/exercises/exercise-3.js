function scramble(param1, param2, param3) {
  const result = _ + _ + _;
  return result;
}

const arg1 = "x";
const arg2 = "z";
const arg3 = "y";
const returned1 = scramble(arg1, arg2, arg3);
const isTrue1 = returned1 === "yxz";
console.assert(isTrue1, 'Assertion 1');

const arg4 = "x";
const arg5 = "y";
const arg6 = "z";
const returned2 = scramble(arg4, arg5, arg6);
const isTrue2 = returned2 === "zxy";
console.assert(isTrue2, 'Assertion 2');

const arg7 = "z";
const arg8 = "y";
const arg9 = "x";
const returned3 = scramble(arg9, arg8, arg7);
const isTrue3 = returned3 === "zxy";
console.assert(isTrue3, 'Assertion 3');

const arg10 = "y";
const arg11 = "x";
const arg12 = "z";
const returned4 = scramble(arg11, arg12, arg10);
const isTrue4 = returned4 === "yxz";
console.assert(isTrue4, 'Assertion 4');
