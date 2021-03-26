/* A suggested workflow for studying code in VSCode's debugger

  Getting Ready
  1 - open the file you want to study
  2 - place a breakpoint at the beginning of your file
  3 - open the debugger panel in the side-panel
  4 - open the VSCode terminal

  Studying
  5 - in the debugger panel, click on the |> button up top next to RUN
  6 - the debugger will stop at your breakpoint and you can now step through your code
  7 - for each step in your script's execution:
    A - before pressing the "Step" button (->*) button ask yourself (out loud if possible)
        - "which line will be executed next?"
        - "will this next line ...
            ... read from memory?"
            ... write to memory?"  (careful, it's possible to do both!)
            ... log to the console?"
            ... create a new level in the callstack?" (ie. call a function)
            ... create a new block scope?"
            ... decide the flow of my program?" (ie. if, while, for)
        - "what will the memory panel on the right look like after this step is finished?"
        - Pro Tip: write and draw your predictions on a piece of paper! (really, do this.  it helps)
    B - step to the next line and check if you were right or wrong
    C - repeat
  8 - repeat

  Hint: all the different stepping buttons in the debugger? try them all!
  Hint: code with `prompt`, `alert` or `confirm` will not work in VSCode

*/

let hello = 'world';
console.assert(hello === 'world', 'hello should be "world"');

hello = 'good bye';
console.assert(hello === 'good bye', 'hello should be "good bye"');

console.log('world');
