# Errors and Program Life-Cycle

Program life cycle is the air JavaScript breaths, you may not notice it but it's always there and it's pretty darned important. Taking the time to become familiar with the life-cycle of JS program will make it easier to debug your code and to learn the tricker topics everyone's talking about; scope, errors, hoisting, strict mode, you name it.

Learning to understand the difference between your source code (simply a text file) and the dynamic runtime of your program (values changing in memory) is a strange but critical skill to learn. Before it 'clicks', it will be a mystery. After it 'clicks' it will be almost simple. To understand a running program you need to be aware of the life-cycle of a JS program:

1. Source Code
2. Creation Phase
3. Execution Phase

---

## 4 Principles

1. **Creation Phase** & **Execution Phase**

   - _Creation phase_ is what happens before the program runs. JS will interpret your code and prepare the program memory. Some errors occur at this point in the program life cycle.
   - _Execution Phase_ is everything that happens after the creation phase. This is when JS executes your program one statement at a time, carrying out your instructions. Other errors occur in this part of the program life cycle.

2. **JavaScript Syntax**

   - You can think of this like spelling & vocabulary. If you open parenthesis, you must close them or the JS interpreter will not understand what you wrote. If you use a symbol that JS doesn't support it will throw an error. If you write anything that JS does not understand or write code that JS does not allow, you will get a syntax error.
   - Learning JS syntax means building your understanding of what is and isn't allowed, then recognizing & fixing mistakes you make. This is just a lot of memorization and attention to detail.

3. **JavaScript Semantics**

   - Just because your code has correct syntax doesn't mean everything is ok! It is still possible for you to use correct syntax in incorrect ways. The rules that define correct and incorrect usage are JS semantics.
   - You can think of it like normal language, a sentence can have good grammar but still make no sense: "Dogs talk most, coral does recess."

4. **Errors**

   - **creation phase errors** Bad "spelling" or bad "grammar". Your program can either not be understood by the JS interpreter, or made a mistake that the interpreter was able to find without running your code. Your program will not continue to the execution phase.
   - **execution phase errors** Commonly called "runtime errors". You made no syntax errors and no semantic errors the interpreter could catch, so your program entered execution phase. But somewhere in your program you instructed JavaScript to do something that is not possible.
   - The examples in this chapter will include tips on how to tell if an error occurred during creation or execution phase.

## Logic Errors

Logic errors (or "bugs") are when your code runs without an error, but does not do what you wanted it to. This is a different topic from Language Errors (when your code simply breaks). Bugs and errors are often taught together, but are actually different. Take a look at this funny video [comparing syntax & logic errors](https://www.youtube.com/watch?v=tV0tQisuxPo) to understand the difference by analogy.

While fixing errors requires only a solid understanding of the JS Syntax and Semantics, plus some experience with the debugger. Fixing logic mistakes also requires an understanding of debugging strategies, testing and strategic thinking. This chapter only covers Language Errors.

---

## Resources

- [creation phase & execution phase](https://www.youtube.com/watch?v=YID-HIdy1bk)
- [syntax vs semantics](https://www.youtube.com/watch?v=vP-mn62EF0o)
- [Syntax Parsers, Execution Contexts, and Lexical Environments](https://www.youtube.com/watch?v=KYFTXszMQdk&list=PLz1XPAFf8IxbIU78QL158l_KlN9CvH5fg&index=5)
- [different kinds of errors](https://education.launchcode.org/intro-to-professional-web-dev/chapters/errors-and-debugging/categories-of-errors.html)
- JS Tutor snippets:
  - [creation phase errors](https://goo.gl/1Psxu7)
  - [creation phase errors](https://goo.gl/68af7H)
  - [execution phase errors](https://goo.gl/WzbmNE)
- [JS error reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors)
- [JavaScript Engines](https://www.youtube.com/watch?v=BMKWdLX9w3M)
- [errors vs. bugs vs. defects](https://www.youtube.com/watch?v=pqSB3MrUtD4)
