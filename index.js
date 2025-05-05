let message = "Hello World";
let name = "Kenji";
let age = "27";
let gender = "Male";


console.log (message, name, age, gender);

const PI = "3.14";
console.log (PI); 

/* DATA TYPES */

let messages = "This is string"; 
let ages = 21;
let isBoolean = true; 

let person = {
    names: "Kenji",
    age: 21,

};

console.log(person["names"], person["age"]);

let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits[2]);

let add = function(a,b){
    return a + b;
}

console.log(add(1, 2)); 

let prutas = ["Atis", "Mansanas", "Saging"];
console.log(prutas[1]);

let animal = {
    name: "lion",
    age: 3,
};

console.log(animal["age"], animal["name"])

//Arithmetic Operators

let x = 4;
let y = 3;
let w = "11"
let z = 11;

//Comparison Operators
let isGreater = y > x;
//let isEqual = w === z;
let isEqual = w !== z
console.log(isEqual);
    
//Logical Operators
//AND - &&
//OR - || 

//console.log(x > 6 && x < 7); //false
console.log(x > 8 || y < 2); //true
