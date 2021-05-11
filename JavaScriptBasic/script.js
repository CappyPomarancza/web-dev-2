// Data types in JavaScript
//
// // Primitive :
// //     undefined
// //     null
// //     number
// //     string
//
// // All other values are OBJECTS, including arrays and functions !
//
// // Null literal
// // null

// // Boolean literal
// // true
// // false

// // Numeric literals
// // 1234567890
// // 42

let fuel = null;

// console.log('fuel', fuel);
// console.log('!!fuel', !!fuel);

// Boolean literal
let onlyTrue = true;
let onlyFalse = false;
// console.log('onlyTrue', onlyTrue);
// console.log('onlyFalse', onlyFalse);

// String literals:
const name = 'Kacper';
const lastName = "Swietlaga";
// console.log('name', typeof name);
// console.log('!!name', !!name);
// console.log('!name', !name);

// Numeric literals
const age = 28;
const year = 2021;
// console.log('age', age);
// console.log('age typeof', typeof age);
// console.log('!!age', !!age);


// Array literal :
const years = [1954, 1974, 1990, 2014];
const multipleTypeArray = [1954, 'Ala', 'ma', 'kota', years, age, year];
// console.log('szukam Ali index = 1', multipleTypeArray[1]);
// console.log('index = 3', multipleTypeArray[3]);
console.log('multipleTypeArray before', multipleTypeArray);

multipleTypeArray[1] = 'Kacper';

console.log('multipleTypeArray after', multipleTypeArray);

// console.log('years', years);
// console.log('years', years.length);
// console.log('typeof years', typeof years);

// Object literals :
const someObject = { a: 'foo', b: 'bar', c: 42 };
const person = {
    name: 'Kacper',
    lastName: 'Swietlaga',
    age: 30,
    friends: [
        {
            name: 'Hubert',
            age: 20
        },
        {
            name: 'Ala',
            age: 20
        },
        {
            name: 'Sławek',
            age: 20
        },
    ]
};

console.log('person typeof', typeof person);
console.log('person', person);
console.log(' person.name', person.name);
console.log(' person.lastName', person.lastName);
console.log('person.friends', person.friends);

console.log('person.friends konkretna osoba', person.friends[1].name);


// All values are truthy unless they are defined as falsy.!!!!
console.log('!!-0', !!-0);
console.log('-0', -0);

console.log(' 3 / -0', 3 / -0);
console.log('3 / 0', 3 / 0);

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

let x = 1 + 1;
let y = 2 - 3;
// let z = a + b;
// console.log('z', z); // if let ->script.js:78 Uncaught ReferenceError: Cannot access 'a' before initialization
// checkout a and b to var declaration
// WARNING!
//     + is also concatenation operator!
//     Try:

let result = 'Ala ' + 'ma' + 'kota';
// It can make problems!

// * and /
// let a = 2 / 2;
// let b = a * 2;
// let c = a * b;

// Modulo %

// let a = 2 % 2; // result is 0
// let b = 4 % 3; // result is 1
// let c = 2 % 4; // result is 2

let a = 2;
let b = 4;
a += a; // result is 4
b -= b; // result is 0

// Checkout on console:

// console.log('a--', a--);
//
//
// console.log('a', a);


// console.log('--a', --a);


// console.log('a', a);


// console.log('b++', b++);


// console.log('b', b);


// console.log('++b', ++b);

// console.log('b', b);




//Comparison and logical operators
//Equality ==
// == operator try to converts and compare the operands
// event if they are not of the same type. If both operands are
// objects, then JS checks if operands refer to the same
// object in memory.
//
// console.log("1 == 1", 1 == 1); // true
// console.log("'1' == 1", '1' == 1); // true
// console.log("1 == '1'",1 == '1'); // true
// console.log("0 == false", 0 == false); // true


let object1 = {key: 'value'};
let object2 = {key: 'value'};
let object3 = object1;
// console.log('object1 == object2', object1 == object2); //false
// console.log('object3 == object1', object3 == object1); //true

// Comparison and logical operators
// Strict equality (===)

// The strict equality operator returns true if the operands are
// strictly equal with no type conversion!

// console.log("1 === 1", 1 === 1); // true
// console.log("'1' === 1", '1' === 1); // false

// Comparison and logical operators
// Strict inequality (!==)

// Do opposite thing as strict equality (checks if operands are
// NOT equal).
