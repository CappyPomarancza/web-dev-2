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
let name = 'Kacper';
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
// console.log('multipleTypeArray before', multipleTypeArray);
//
multipleTypeArray[1] = 'Kacper';

// console.log('multipleTypeArray after', multipleTypeArray);

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

// console.log('person typeof', typeof person);
// console.log('person', person);
// console.log(' person.name', person.name);
// console.log(' person.lastName', person.lastName);
// console.log('person.friends', person.friends);
//
// console.log('person.friends konkretna osoba', person.friends[1].name);


// All values are truthy unless they are defined as falsy.!!!!
// console.log('!!-0', !!-0);
// console.log('-0', -0);
//
// console.log(' 3 / -0', 3 / -0);
// console.log('3 / 0', 3 / 0);

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

let x = 10 + 1;
let y = 2 - 3;
// let z = a + b;
// console.log('z', z); // if let ->script.js:78 Uncaught ReferenceError: Cannot access 'a' before initialization
// checkout a and b to var declaration
// WARNING!
//     + is also concatenation operator!
//     Try:

let result = 'Ala ' + 'ma ' + 'kota';
// console.log('result', result);

// It can make problems!

// * and /
// let a = 2 / 2;
// let b = a * 2;
// let c = a * b;
// console.log('c', c);

// Modulo %

// let a = 2 % 2; // result is 0
// let b = 4 % 3; // result is 1
// let c = 2 % 4; // result is 2

let a = 2;
let b = 100;

// console.log('a +=5 ', a+=5);

// b -= b; // result is 0
// b -= 10;
// b -= 20;
// console.log('b', b);

// a += 5;
// a++;

// a--;
// console.log('a--', a--);
// console.log('a', a);
//
// console.log('--a', --a);
//
// console.log('a', a);


// a += a; // result is 4

// a+=1;

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

// console.log("1 == 1", 1 == 1);
// console.log("'1' == 1", '1' == 1);
// console.log("1 == '1'",1 == '1');
// console.log("1 != 1", 1 != 1);
// console.log("'1' != 1", '1' != 1);
// console.log("1 != '1'",1 != '1');
// console.log("0 != false", 0 != false);

let object1 = {key: 'value'};
let object2 = {key: 'value'};
let object3 = object1;

// console.log('object1 == object2', object1 == object2);

// console.log('object2 == object3', object3 == object1);
// console.log('object1.key == object2.key', object1.key == object2.key);


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

// console.log("1 !== 1", 1 !== 1); // true
// console.log("'1' !== 1", '1' !== 1); // false

// true || false
//
// true && true

let fruits = [ 'jabłko', 'banan', 'gruszka', 'mandarynka', 'gruszka', 'mango', 'ananas'];

// console.log('fruits', fruits);
let i;

name = 'Kacper';
let helloSentence = '';
let isfirstLog = false;

// if (name) {
//     helloSentence = 'Hello ' + name + '!';
// } else if (isfirstLog) {
//     helloSentence = 'Hello New User!';
// } else {
//     helloSentence = 'Hello User!';
// }


// if (name) {
//     helloSentence = 'Hello ' + name + '!';
// } else {
//     helloSentence = 'Hello User!';
// }

helloSentence = name?
    ('Hello ' + name + '!')
    : isfirstLog?
        'Hello New User!'
        : 'Hello User!';


// console.log('helloSentence', helloSentence);






let number;
if (!number){

} else {
    if (number === 5) {
        console.log('masz lat 5 możesz kuipić jedynie cukierki');
    } else if(number === 10) {
        console.log('masz lat 10 możesz kuipić cukierki i oranżadę i wodę gazowaną');
    } else if (number == 15) {
        console.log('masz lat 15 możesz kuipić cukierki i oranżade i lody ekipy');
    } else if (number === 18) {
        console.log('masz lat 18 możesz kupić oprócz lodów piwo i amantadynę w aptece');
    }
}


switch (number) {
    case 5:
        console.log('masz lat 5 możesz kuipić jedynie cukierki');
        break;
    case 10:
        console.log('masz lat 10 możesz kuipić cukierki i oranżadę i wodę gazowaną');
        break;
    case 15:
        console.log('masz lat 15 możesz kuipić cukierki i oranżade i lody ekipy');
        break;
    case 18:
        console.log('masz lat 18 możesz kupić oprócz lodów piwo i amantadynę w aptece');
        break;
}

// let menuList = ['frytki', 'dorsz', 'topinambur'];
// let myOrder = [];
let myOrder = ['frytki', 'ketchup', 'topinambur', 'batanty', 'dorsz'];

let menuList = new Array(3);
menuList[0] = 'frytki';
menuList[1] = 'dorsz';
menuList[2] = 'topinambur';
menuList[3] = 'batanty';
// menuList.length = 0;
myOrder.push('piwo'); // add new element to array and return new length of array
// myOrder.pop(); // delete last element from array and return this element

myOrder.unshift('pizza'); // add first element to array and return new length of array

// myOrder.shift(); // delete first element from array and return this element

// let test = myOrder.splice(2, 2);
// let test = myOrder.splice(2, myOrder.length - 2);
//  myOrder.splice(2); // deleted all elements start in pass index number
// let test = myOrder.splice();

// let test = myOrder.slice();

// let test = myOrder.slice(1, 5);

myOrder.slice(3);


// console.log('myOrder', myOrder);
// let test = myOrder.join(); // default separator is  ","
// let test = myOrder.join('-');

let test = myOrder.concat(fruits);

// console.log('test', test);

// console.log('myOrder', myOrder);


const dish = {
    id: 1,
    name: 'frytki',
    price: 15,
};

// function helloUser() {
//     console.log('Hello User');
// }

// const helloUser = function () {
//     console.log('Hello User');
// };

// const helloUser = () => {
//     console.log('Hello User', a);
// };

// helloUser();
let sum = 0;

const add = (a, b) => {
     x = 2;
     y = 6;
    sum = a + b;
};

add(0,9);

// let resultAdd = add;

// (function (a, b) {
//     sum = a + b;
// })(0,9);

const order = [
    {
        name: 'frytki',
        price: 15,
        vege: true
    },
    {
        name: 'piwo',
        price: 10,
        vege: true
    },
    {
        name: 'kompot',
        price: 7,
        vege: true
    },
    {
        name: 'pomidorowa',
        price: 9,
        vege: false
    },
    {
        name: 'dorsz',
        price: 28,
        vege: false
    },
    {
        name: 'hamburger',
        price: 30,
        vege: false
    },
    {
        name: 'stek',
        price: 45,
        vege: false
    }
];

let orderMapResultByFor = [];

for (let i = 0; i < order.length; i++) {
    orderMapResultByFor.push(order[i].name)
}
// console.log('orderMapResultByFor', orderMapResultByFor);

let orderMapResult = order.map((el, i, arr) => {
    return el.name + ' cena pozycja: ' + el.price
});
// console.log('orderMapResult', orderMapResult);

let orderFilterResultByFor = [];
for (let i = 0; i < order.length; i++) {
    if (order[i].price < 20 && order[i].vege) {
        orderFilterResultByFor.push(order[i])
    }
}

let orderFilterResult = order.filter(element => {
    return element.price < 20 && element.vege
});

console.log('orderFilterResult', orderFilterResult);
console.log('orderFilterResultByFor', orderFilterResultByFor);


let orderMapAndFilterResult =
    order
        .filter(element => element.price > 10)
        .map(element => element.price)

// console.log('orderMapAndFilterResult', orderMapAndFilterResult);

let totalPrice = 0;
for (let i = 0; i < order.length; i ++) {
    totalPrice += order[i].price
}
console.log('totalPrice', totalPrice);

let orderReduceResult = order
    .map(el => el.price)
    .reduce((previousValue, currentValue) => {
        return previousValue + currentValue
    }, 0)


console.log('orderReduceResult', orderReduceResult);

let orderFindResult = order.find(el => !el.vege);
console.log('orderFindResult', orderFindResult);
