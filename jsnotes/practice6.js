// Data Types - 
// Premetive Data Types - Number, String, Boolean, Undefined, Null
// Non-Primitive Data Types - Object, Array, Function (reference data types)

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
// delete fruits.color;

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

// Methods - methods are simple function which are defined as a property
//  inside an object.

// const person = {
//     "name":"Puran", //string
//     "age": 23,      //number
//     "isDeveloper": true,  //boolean
//     "skills": ["HTML", "CSS", "JS"], //array
//     "address": {
//         "state": "West Bengal",
//         "pincode": 110085
//     },                          //object
    
// }

// function teaching(){
//     return "I am teaching";
// }

// const person = {
//     name:"Amit",
//     role:"Developer",
//     sayHi: function(firstName, location){
//         return "Hello, I am " + firstName + " and i am from "+ location;
//     },
//     sayBye(){
//         return "Good Bye";
//     },
//     sayHello: ()=>{
//         return "Hello .. heelooooooooooo";
//     }
// }

// person.location  = "Up";
// person.teacher = teaching;
// console.log(person.sayBye());
// console.log(person.sayHello());
// console.log(person.sayHi("Puran","West Bengal"));



// methods - ye ek function hai jise hum as a property define karte hai object me.


// const car = {
//     name: "Audi",
//     model: "A4",
//     color: "Black",
//     // selfDrive: function(){
//     //     return "I am self driving car";
//     // }
//     // selfDrive(){
//     //     return "I am self driving car";
//     // }
//     selfDrive: ()=>{   // fat arrow function => fat arrow syntax
//         return "I am self driving car";
//     }

// }

// console.log(car.selfDrive());

// this keyword - 
// this keyword is a reference to the current object.

// method - parent object
// function - global object
// new keyword - new empty object - constructor function


// const person = {
//     name:"Amit",
//     role:"Developer",
//     greet(){
//         console.log(this.name);
//     }
//     // greet: ()=>{
//     //     console.log(this);   // arrow function ka this keyword nahi hota hai
//     // }
// }
// person = this
// person.role = this.role
// console.log(person)
// person.greet();

// function showThis(){
//     console.log(this);
// }
// showThis();

// console.log(this);


// Factory Functions- 
// Factory functions are functions that return an object.

// const student1 = {
//     name: "Punam"
//     campus:
// }

// const student2 = {
//     name: "Payal"
//     campus:
// }

// const student3 = {
//     name: "Vanashri"
//     campus:
// }

// const student4 = {
//     name: "Nandani"
//     campus:
// }

// kya hum aisa koi function bana sakte hai jo same object 
// return kare for multiple students.

// function createStudent(studentName, studentCampus){
//     return {
//         name:studentName,
//         campus:studentCampus,
//     }
// }


// const alka = createStudent("Alka", "Pune");
// const nandani = createStudent("Nandani", "Amravati");
// console.log(alka);
// console.log(nandani);

// let punam = createStudent("punam","amravati");
// let shikha = createStudent("Shikha","pune");
// let payal = createStudent("Payal","Sarjapur");

// console.log(punam.studentDetails());
// console.log(shikha.studentDetails());
// console.log(payal.studentDetails());


// Constructor Function -
// Constructor functions are functions that create new objects.

// Naming conventention - PascalCase - First letter of each word is capital.
// const object = {};

// object.role = "Developer";

// console.log(object);

// object == this
// object.role == this.role
// object.role = "developer"
// this.role = "developer"


// function CreateStudent (n,c){ 
//    // {}
//    // {} == this
//     this.name = n;
//     this.campus = c;
//     this.sayHi = function(){
//         return "Hello, I am " + this.name + " and i am from "+ this.campus;
//     }
//     // return this;
// }

// const alka = new CreateStudent("Alka","Pune"); // function call
// const nandani = new CreateStudent("nandani","amrawati"); // function call
// console.log(alka.sayHi());
// console.log(nandani);

// let punam =  new CreateStudent("Punam","Amravati")
// let shikha = new CreateStudent("Shikha","Pune");
// let payal = new CreateStudent("Payal","Sarjapur");
// console.log(punam.studentDetails());
// console.log(shikha.studentDetails());
// console.log(payal.studentDetails());

// new keyword - empty object create karta hai
// {}
// {} == this
// return this


// deep copy and shallow copy

// non-primitive data types - array, object - reference data types
// object - reference data type

// let num  = [1,2]

// let num2  = num;
// num2.push(3);  

// console.log(num); 
// console.log(num2); 


// ... spread operator

// let arr = [1,2,3,4,5];
// let arr2 = [6,7,8,9,10];

// const object1 = {
//     "name": "JavaScript",
//     "type": "Programming Language",
// }

// const object2 = {
//     version: "ES6",
//     year: 1995,
// }

// console.log({...object1,...object2})

// shallow copy
// deep copy


// let obj = {
//     name: "Puran",                        //deep copy - top level
//     location:"noida",                     // shallow copy - nested level
//     address: {
//         permanent: "Kanpur",
//         present: "Chennai"
//     }
// }

// let obj2  = {...obj};            // shallow copy
// let obj2 = Object.assign({},obj);  // shallow copy

// { name: 'Puran', location: 'noida' } 

// obj2.name = "Amit";
// obj2.location = "Delhi";
// obj2.address.present = "Ranchi";

// console.log(obj)
// console.log(obj2);

// let obj = {
//         name: "Puran",                      
//         location:"noida",                           
//         address: {
//             permanent: "Kanpur",
//             present: "Chennai"
//         },
//         sayHii(){
//             console.log("Hello")
//         }
//     }


// const value  = JSON.stringify(obj);
// const newValue = JSON.parse(value);


// newValue.name = "Amit";
// newValue.location = "Delhi";
// newValue.address.present = "Ranchi";

// console.log(obj);
// console.log(newValue);

// structuredClone();
