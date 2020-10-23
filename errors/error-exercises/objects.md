# Object Errors

* [too-far object access](#too-far-object-access)
* [access property directly](#access-property-directly)

---

## too-far object access

broken code:
```js
let a = {b:3};
let b = a.b.3
```
error message:
```
```
classification:
* creation phase or execution phase ?
* syntax or semanitc ?

the fix:
```js
```
your notes:

[TOP](#object-errors)

---

## access property directly
broken code:
```js
let x = {b:'e'};
let y = b.e;
```
error message:
```
```
classification:
* creation phase or execution phase ?
* syntax or semanitc ?

the fix:
```js
```
your notes:

[TOP](#object-errors)


___
___
### <a href="http://janke-learning.org" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/50098409-22575780-021c-11e9-99e1-962787adaded.png" width="40" height="40"></img> Janke Learning</a>
