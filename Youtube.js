/*  JavaScript Foundations: Execution Context and Call Stack

freeCodeCamp.org
2.36M subscribers

Execution Context and the Call Stack in JavaScript are explained in this beginners tutorial. First, recognize that the global scope is nothing more than an instance of the main Window() object. The "this" keyword, and variable environment are used to juggle around data inside the lexical environment of a particular scope.

Basically, every time a function is called, a new execution context is created. An execution context is composed from the Lexical Environment of the scope it is in, the Variable Environment and "this" keyword binding. The this keyword will refer to the object, of the scope from which the function was called. However, when an object literal is used, or the function is used to instantiate a new object using the "new" operator, then the function will create its own this / execution context. You can chain execution contexts, as they are placed on the main Call Stack. When the function returns, the execution context is removed from the top of the Call Stack.

https://www.youtube.com/watch?v=jTGb4t31vCY

*/

/* The Ultimate Guide to Execution Contexts, Hoisting, Scopes, and Closures in JavaScript

uidotdev
It may seem surprising, but in my opinion the most important and fundamental concept to understanding the JavaScript language is understanding Execution Context. In this video you'll not only learn all about Execution Contexts, but also more advanced JavaScript topics like hoisting, the scope chain, and closures.

It may seem surprising, but in my opinion the most important and fundamental concept to understanding the JavaScript language is understanding Execution Context. In this video you'll not only learn all about Execution Contexts, but also more advanced JavaScript topics like hoisting, the scope chain, and closures.


https://www.youtube.com/watch?v=Nt-qa_LlUH0

*/