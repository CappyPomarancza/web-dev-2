// Data types in JavaScript

// Primitive :
//     undefined
//     null
//     number
//     string

// All other values are OBJECTS, including arrays and functions !

// Null literal
// null
// Boolean literal
// true
// false
// Numeric literals
// 1234567890
// 42
// Null literal
let fuel = null;
console.log('fuel', typeof fuel);

// Boolean literal
let onlyTrue = true;
let onlyFalse = false;
console.log('onlyTrue', typeof onlyTrue);
console.log('onlyFalse', typeof onlyFalse);

// String literals:
const name = 'Kacper';
const lastName = "Swietlaga";
console.log('name', typeof name);

// Numeric literals
const age = 28;
const year = 2021;
console.log('age', typeof age);

// Array literal :
const years = [1954, 1974, 1990, 2014];
console.log('years', typeof years);

// Object literals :
const someObject = { a: 'foo', b: 'bar', c: 42 };
console.log('someObject', typeof someObject);

// All values are truthy unless they are defined as falsy.!!!!

// Falsy variables are:
//         false,
//         0,
//         "",
//         null,
//         undefined,
//         NaN.

// Variables are case sensitive!
//     result = 10
// RESULT = 11
// Lines above are different variables!

// COMMENTS
// One line:
// comment

//     Multi-line:
/*
comment
comment
comment
*/

// Basic math operations
// + and -

var a = 1 + 1;
var b = 2 - 3;
var c = a + b;

// WARNING!
//     + is also concatenation operator!
//     Try:

var result = 'Ala ' + 'ma' + 'kota';
// It can make problems!

// * and /
var a = 2 / 2;
var b = a * 2;
var c = a * b;

// Modulo %

var a = 2 % 2; // result is 0
var b = 4 % 3; // result is 1
var c = 2 % 4; // result is 2

var a = 2;
var b = 4;
a += a; // result is 4
b -= b; // result is 0

var a = 2
var b = 4
// Checkout on console:

console.log('a--', a--);


console.log('a', a);


console.log('--a', --a);


console.log('a', a);


console.log('b++', b++);


console.log('b', b);


console.log('++b', ++b);

console.log('b', b);
