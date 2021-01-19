/* Syntax Trees

  Like what you see in these exercises?
  Dig deeper into how programming languages are designed by learning about

  the following files aren't exercises with a specific objective
  just code for you to study with https://esprima.org/demo/parse.html
  open this folder in your browser using localhost:3000 to study these files in esprima
  and while you're there, play around a bit!
    what happens if you write a syntax error?
    what does block scope look like?
    what does a conditional statement look like?
    a for loop? a while loop?
    how are functions turned into a tree?

  hint: use the minus signs in the visualization on the right to collapse and explore
    you'll find that the operators with the highest precedent are the deepest nested!

  nice links:
    https://medium.com/@jotadeveloper/abstract-syntax-trees-on-javascript-534e33361fc7
    AST Explorer: https://astexplorer.net/#/gist/eb691ff8c76ea4c90b4e50f4b0316c3c/4e8c8778fcb805b3749ef89ba9fe5e624dd2f7dc
    Esprima Demo: https://esprima.org/demo/parse.html?code=-(b%20%2B%20b)%20%2F%20!a%3B
    how many ways can you rewrite a single expression? https://mothereff.in/operator-precedence

*/

let hello;
hello = "world";

const good = 'bye';
