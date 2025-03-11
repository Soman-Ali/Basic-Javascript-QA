
// 1. Function Expression Hoisting


// console.log(typeof test);
// var test = function() { return 5; };


// console.log(typeof test)
// var test=function(){
//     return 5;
// }
// console.log(typeof test)
// console.log(test());

// answer is undefined
// ------------------------------------------------------------
// --------------------------------------------------------------

// 2. Lexical Scoping with Let and Var


// let x = 5;
// function scopeTest() {
//   console.log(x);
//   var x = 10;
// }
// scopeTest();

// answr is undefined
// ------------------------------------------------------------
// --------------------------------------------------------------

// 3. Closure Inside a Loop


// function createIncrementer() {
//   let count = 0;
//   return function() {
//     return ++count;
//   };
// }

// let increment = createIncrementer();
// console.log(increment());
// console.log(increment());
// answer is 1 and 2

// ===================================================================

// 4. Variable Hoisting


// console.log(foo);
// var foo = 10;

// ans is undefined

// ==========================================================================

// 5. Block Scope with Let


// function blockScope() {
//   let x = 10;
//   if (true) {
//     let x = 20;
//     console.log(x);
//   }
//   console.log(x);
// }
// blockScope();
// ans is 20 10


// ================================================================================
