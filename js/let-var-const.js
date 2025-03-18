
// 1. Function Expression Hoisting


// console.log(typeof test);
// var test = function() { return 5; };


// console.log(typeof test)
// var test=function(){
//     return 5;
// }
// console.log(typeof test)
// console.log(test());

// answer is undefined because test is not defined and then test is defined and then test is called so 5 is printed
// ------------------------------------------------------------
// --------------------------------------------------------------

// 2. Lexical Scoping with Let and Var


// let x = 5;
// function scopeTest() {
//   console.log(x);
//   var x = 10;
// }
// scopeTest();

// answr is undefined because x is defined after console.log(x) so x is undefined
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
// answer is 1 and 2 because count is 0 and increment is called so count is 1 and again increment is called so count is 2

// ===================================================================

// 4. Variable Hoisting


// console.log(foo);
// var foo = 10;

// ans is undefined because foo is not defined

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
// ans is 20 10 because x is 20 in if block and x is 10 outside if block


// ================================================================================
// 6. Function Scope and Closures


// function outer() {
//   var outerVar = "outer";
//   return function inner() {
//     console.log(outerVar);
//   };
// }
// var innerFunc = outer();
// innerFunc();

// ans is outer because outerVar is defined in outer function
// ================================================================================
// 7. Variable Shadowing



// let a = 10;
// function shadow() {
//   let a = 5;
//   console.log(a);
// }
// shadow();
// console.log(a);
// ans is 5 10 because a is 5 in function and a is 10 outside function

// ================================================================================

// 8. Closure and Multiple Functions


// function outerFunc() {
//   let count = 0;
//   return {
//     increment: function() {
//       count++;
//       console.log(count);
//     },
//     decrement: function() {
//       count--;
//       console.log(count);
//     }
//   };
// }

// let counter = outerFunc();
// counter.increment();
// counter.decrement();

// ans is 1 nd 0 because count is 0 and increment is called so count is 1 and decrement is called so count is 0  again 

// ================================================================================
// 9. Lexical Scoping with Functions

// function outerFunc(){
//     let x = 10;
//     function innerFunc(){
//         console.log(x);
//     }
//     return innerFunc;
// }
// let result = outerFunc();
// result();

// ans is 10 because x is defined in outer function

// ================================================================================

// 10. Hoisting with Function Declarations

// function hoistingTest(){
//     console.log(x);
//     var x = 10;
// }
// hoistingTest();
// ans is undefined because x is not defined
// ================================================================================

// 11. Functions and Default Parameters

// function add(a=5,b=a*2){
//     return a+b;
// }
// console.log(add(3));
// console.log(add());
// ans is 8 and 15 because 3+6=9 and 5+10=15 

// ================================================================================
// 12. Function Hoisting with Function Expressions

// console.log(test());
// var test = function() { return 5; };
// ans is error because test is not defined
// ================================================================================
// 13. Function Scope with Var

// function scopeTest() {
//     if (true) { 
//         var x = 10;
//     }
//     console.log(x);
// }
// scopeTest();
// ans is 10 because x is defined in if block
// ================================================================================

// 12. Closure with State
// function createCounter(){
//     let count =0;
//     return function(){
//         return ++count;
//     };
// }
// const counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// ans is 1 2 3 because count is 0 and increment is called so count is 1 and again increment is called so count is 2 and again increment is called so count is 3
// ================================================================================

// 13. Hoisting in Functions

// function testHoist(){
//     console.log(foo);
//     var foo = 10;
// }
// testHoist();
// ans is undefined because foo is not defined

// ================================================================================

// 14. Self-Invoking Function with Closure

// (function(){
//     var x=5;
// })();
// console.log(x);
// ans is error because x is not defined

// ================================================================================

// 15. Closure and Returning Functions

// function multiplierFactory(factor){
//     return function(num){
//         return num*factor;
//     };
// }
// let double = multiplierFactory(2);
// console.log(double(4));
// ans is 8 because 4*2=8 because double is 2 and 4 is passed to double so 4*2=8 and printed 8 
// ================================================================================


// 16. Block Scope and Let

// let x=5;
// function checkScope(){
//     let x=10;
//     console.log(x);
// }
// checkScope();
// console.log(x);
// ans is 10 5 because x is 10 in function and x is 5 outside function
// ================================================================================

// 17. Functions and Parameter Hoisting

// function hoistParam(param){
//     console.log(param);
//     var param = 10;
// }
// hoistParam(5);
// ans is undefined because param is not defined
// ================================================================================
// 18. Nested Functions and Scope Chain

// let x=1;
// function outer(){
//     let x=2;
//     function inner(){
//         console.log(x);
//     }
//     inner();
// }
// outer();
// ans is 2 because x is 2 in inner function

// ================================================================================

// 19. Arguments Object

// function testArgs(a,b,c){
//     console.log(arguments[0],arguments[1],arguments[2]);
// }
// testArgs(1,2);
// ans is 1 2 undefined because 1 and 2 are passed to a and b and c is not passed so c is undefined

// ================================================================================
// 20. Variable Shadowing in Blocks

// let x=5;
// {
//     let x=10;
//     console.log(x);
// }
// console.log(x);
// ans is 10 5 because x is 10 in block and x is 5 outside block

// ================================================================================

// 21. Closures and Lexical Scope

// function outer(){
//     let a=1;
//     function inner(){
//         console.log(a);
//     }
//     return inner;
// }
// let result = outer();
// result();
// ans is 1 because a is 1 in outer function
// ================================================================================

// 22. Hoisting in Function Expressions

// console.log(typeof foo);
// var foo = function(){
//     return 5;
// }
// console.log(typeof foo);
// console.log(foo());
// ans is undefined because foo is not defined and then foo is defined and then foo is called so 5 is printed
// ================================================================================


// 23. Function Declaration Hoisting

// function hoistFunc(){
//     console.log(foo());
//     function foo(){
//         return 10;
//     }
// }
// hoistFunc();
// ans is 10 because foo is defined before calling foo so 10 is printed


// ================================================================================

// 24. Closures and Arguments

// function createfunction(){
//     let count=0;
//     return function(){
//         return ++count;
//     };
// }
// const increment = createfunction();
// console.log(increment());   
// console.log(increment());
// console.log(increment());
// ans is 1 2 3 because count is 0 and increment is called so count is 1 and again increment is called so count is 2 and again increment is called so count is 3


// ================================================================================

// 25. Scope and Variable Shadowing

// let x=10;
// function checkScope(){
//     let x=20;
//     console.log(x);
// }
// checkScope();
// console.log(x);
// ans is 20 10 because x is 20 in function and x is 10 outside function
// ================================================================================

// 26. Immediate Invocation and Scope

// (function(){
//     var x=5;
// })();
// console.log(x);
// ans is error because x is not defined
// ================================================================================

// 27. Closures with Nested Functions


// function outerFunction() {
//   var outerVar = "I'm outer";
//   return function innerFunction() {
//     console.log(outerVar);
//   };
// }
// outerFunction()();
// ans is I'm outer because outerVar is defined in outer function
// ================================================================================

// 28. Hoisting of Function Expressions


// console.log(typeof func);
// var func = function() {
//   return 5;
// };
// ans is undefined because func is not defined

// ================================================================================
// 29. Block Scope with Let

// let x=10;
// if(true){
//     let x =20;
//     console.log(x);
// }
// console.log(x);
// ans is 20 10 because x is 20 in if block and x is 10 outside if block
// ================================================================================

// 30. Closures and State Management

// function counter(){
//     let count =0;
//     return function(){
//         return ++count;
//     };
// }
// const increment =counter();
// console.log(increment());
// console.log(increment());
// ans is 1 2 because count is 0 and increment is called so count is 1 and again increment is called so count is 2
// ================================================================================

// 31. Hoisting and Function Parameters

// function testHoisting(param){
//     console.log(param);
//     var param = 20;
// }
// testHoisting(10);
// ans is undefined because param is not defined

// ================================================================================

// 32. Variable Shadowing in Nested Functions

// let a=1;
// function outer(){
//     let a=2;
//     function inner(){
//         console.log(a);
//     }
//     inner();
// }
// outer();
// ans is 2 because a is 2 in inner function and 2 is printed
// ================================================================================


// 33. Closures with Multiple Functions

// function createCounter(){
//     let cpunt =0;
//     return{
//         increment:function(){
//             count++;
//             console.log(count);
//         },
//         decrement: function(){
//             count--;
//             console.log(count);
//         }
//     };
// }
// const counter=createCounter();
// counter.increment();
// counter.decrement();
// ans is 1 0 because count is 0 and increment is called so count is 1 and decrement is called so count is 0

// ================================================================================
// 34. Lexical Scope and Closures

// let a=1;
// function outerFunc(){
//     let a=22;
//     return function(){
//         console.log(a);
//     };
// }
// let result=outerFunc();
// result();
// ans is 22 because a is 22 in outer function






