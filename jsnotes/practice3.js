// Data Types - 
// Premetive Data Types - Number, String, Boolean, Undefined, Null
// Non-Primitive Data Types - Object, Array, Function (reference data types)

const { property } = require("lodash");

// Object -
// 1. Object is a non-primitive data type.
// 2. Object is a collection of key-value pairs.
// 3. Object is a reference data type.
// 4. Object is a mutable data type.
// 5. Object is a unordered data type.


// Create an Object -
// 1. Using Object Literals
// 2. Using new keyword
// 3. Using Object.create() method
// 4. Using Constructor Function
// 5. Using ES6 Classes

// 1. Using Object Literals

// Key-Value Pairs - property

// const object1 = {
//     "name": "JavaScript",
//     "type": "Programming Language",
//     "who devloped": "Brendan Eich",
// }

// Access Object Properties -
// 1. Dot Notation
// 2. Bracket Notation or Array Notation

// console.log(object1.type);
// console.log(object1["name"]);
// console.log(object1["who devloped"]);

// Modify Object Properties -
// object1.name = "JS";
// object1["type"] = "Scripting Language";

// Add new properties to Object -
// object1.version = "ES6"
// object1["year"] = 1995;

// Delete Object Properties -
// delete object1["who devloped"];

// Check Property Exist in Object -
// 1. in operator
// 2. hasOwnProperty() method

// console.log("name" in object1);
// console.log("version" in object1);
// console.log("who devloped" in object1);

// console.log(object1.hasOwnProperty("name"));
// console.log(object1.hasOwnProperty("version"));
// console.log(object1.hasOwnProperty("programming"));

//  in - check property in object and its prototype chain
// hasOwnProperty() - check property in object only

// console.log(object1)

// loop through object properties -

// const fruits = {
//     "name": "Mango",
//     "color": "Red",
//     "taste": "Sweet",
//     "price": 100,
//     "isAvailable": true,
// }

// console.log(fruits["name"])

// console.log(fruits.name);

// for-in loop

// synax - for(const propertyName/variableName in ObjectName) { }

// const key = [];
// const values = [];


// for(const props in fruits){
//     key.push(props)
//     values.push(fruits[props])
//     // console.log(props);
//     // console.log(fruits[props]) // mango, red, sweet, 100, true
// }

// console.log(key);
// console.log(values);

// Object.keys() - return an array of object keys
// Object.values() - return an array of object values

// const keys = Object.keys(fruits);

// const hamariValues  = Object.values(fruits)

// console.log(keys);
// console.log(hamariValues);

// Object.entries() - return an array of object key-value pairs

// console.log(Object.entries(fruits));
// [
//     [ 'name', 'Mango' ],
//     [ 'color', 'Red' ],
//     [ 'taste', 'Sweet' ],
//     [ 'price', 100 ],
//     [ 'isAvailable', true ]
// ]

// Object.freeze() - prevent object properties from being added, modified or deleted

// const fruits = {
//     "name": "Mango",
//     "color": "Red",
//     "taste": "Sweet",
//     "price": 100,
//     "isAvailable": true,
// }

// Object.freeze(fruits);

// fruits.name = "Apple";
// fruits.quantity = 10;

// console.log(fruits);

// Object.seal() - prevent object properties from being added or deleted

// const fruits = {
//         "name": "Mango",
//         "color": "Red",
//         "taste": "Sweet",
//         "price": 100,
//         "isAvailable": true,
//     }

// Object.seal(fruits);

// delete fruits.name;
// fruits.color = "darkred";
// fruits.quantity = 10;

// console.log(fruits);

// Questions - 
// 1. How to find the length of an object ?

// const fruits = {
//         "name": "Mango",
//         "color": "Red",
//         "taste": "Sweet",
//         "price": 100,
//         "isAvailable": true,
//     }

// console.log(Object.keys(fruits).length);

// methods - 

const person = {
    "name":"Puran", //string
    "age": 23,      //number
    "isDeveloper": true,  //boolean
    "skills": ["HTML", "CSS", "JS"], //array
    "address": {
        "state": "West Bengal",
        "pincode": 110085
    },                          //object
    
}









