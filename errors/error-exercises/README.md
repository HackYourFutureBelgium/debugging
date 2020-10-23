# Errors

Errors will keep JS from executing your code.  This is not the goal of programming, so here's some errors to practice fixing.


Complete these exercises directly in the browser from your fork of this repo. (We've provided some completed examples for you to get the idea):
1. Paste the broken code into the devtools console and run it
1. Copy-paste the error message into the "error message" space the challenge
1. Classify the error: _Creation or Execution_ and _Syntax or Semantic_
1. Fix the error and paste your fixed code into "the fix" section of the challenge

Practice using the devtools by clicking on the 'VM##:#' link to the right of the error message.  Devtools will automatically open the source code and highlight where the error appears.  With these super simple examples this feature may feel like overkill, but you will appreciate it's help once you move on to the next set of exercises.

### Index
* [Learning objectives](#learning-objectives)
* [completed examples](#completed-examples)
* [exercises](#exercises)
* [resources](#resources)


---

## Learning Objectives


* reading & identifying error messages
* finding and fixing syntax errors
* building a personal error+fix reference
* not logic errors, that's for 'debugging'
* using devtools console
* writing markdown directly from github

---

## completed examples

### malformed while loop

broken code:
```js
let value = 0;
while (value < 9) 
  value++;
};
```
error message:
```
Uncaught SyntaxError: Unexpected token }
```
classification:
* creation phase
* syntax

the fix:
```js
let value = 0;
while (value < 9) {
  value++;
};
```
your notes:

```
there was no opening bracket
```

[TOP](#errors)

---

## exercises

1. [formatting](./formatting.md)
1. [variables](./variables.md)
1. [functions](./functions.md)
1. [primitve types](./primitive-types.md)
1. [objects](./objects.md)
1. [arrays](./arrays.md)
1. [conditionals](conditionals.md)
1. [loops](./loops.md)

---

## Resources

* [PythonTutor for JavaScript](http://pythontutor.com/javascript.html#)
* [errors and life-cycle](https://github.com/janke-learning/errors-and-life-cycle)




___
___
### <a href="http://janke-learning.org" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/50098409-22575780-021c-11e9-99e1-962787adaded.png" width="40" height="40"></img> Janke Learning</a>

