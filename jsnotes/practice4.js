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

// function student1(){
//     name: "Punam"
//     campus:
// }

// function student2(){
//     name: "Payal"
//     campus:
// }

// function student3(){
//     name: "Vanashri"
//     campus:
// }

// function student4(){
//     name: "Nandani"
//     campus:
// }

// kya hum aisa koi function bana sakte hai jo same object 
// return kare for multiple students.

// function createStudent(studentName, studentCampus){
//     return {
//         name:studentName,
//         campus:studentCampus,
//         studentDetails(){
//             return " hii i am " + this.name + " and i am from " + this.campus;
//         }
//     }
// }


// let punam = createStudent("punam","amravati");
// let shikha = createStudent("Shikha","pune");
// let payal = createStudent("Payal","Sarjapur");

// console.log(punam.studentDetails());
// console.log(shikha.studentDetails());
// console.log(payal.studentDetails());


// Constructor Function -
// Constructor functions are functions that create new objects.

// Naming conventention - PascalCase
// const object = {};

// object.name = "Punam";
// object.campus = "Amravati";


function CreateStudent (studentName, studentCampus){ 
   
    // emptyObject == this;
    // objectName.key = value;
    // {} - create empty object
    // console.log(this)
    // {} = this

    this.name = studentName;
    this.campus = studentCampus
    this.studentDetails= function(){
        return " hii i am " + this.name + " and i am from " + this.campus;
    }

    //return this;
}

let punam =  new CreateStudent("Punam","Amravati")
let shikha = new CreateStudent("Shikha","Pune");
let payal = new CreateStudent("Payal","Sarjapur");
console.log(punam.studentDetails());
console.log(shikha.studentDetails());
console.log(payal.studentDetails());

// new keyword - empty object create karta hai
 // {} == this
 // return this
//